import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { BackwardLink } from '@/components/ui/backward-link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { RadioGroup } from '@/components/ui/radio-group'
import { Typography } from '@/components/ui/typography'
import { useGetRandomCardQuery, useSaveGradeMutation } from '@/services/cards-api'
import { useGetDeckQuery } from '@/services/desk-api'
import clsx from 'clsx'

import s from './question-card.module.scss'

const radioOptions = [
  {
    name: 'Did not know',
    value: '1',
  },
  {
    name: 'Forgot',
    value: '2',
  },
  {
    name: 'A lot of thought',
    value: '3',
  },
  {
    name: 'Confused',
    value: '4',
  },
  {
    name: 'Knew the answer',
    value: '5',
  },
]

export const QuestionCard = () => {
  const { deckId = '' } = useParams()
  const [withAnswer, setWithAnswer] = useState<boolean>(false)
  const [currentOption, setCurrentOption] = useState('1')

  const [saveGrade, { data: cardMutationData, isLoading: isUpdatng }] = useSaveGradeMutation()

  const {
    data: cardQueryData,
    isError,
    isLoading,
  } = useGetRandomCardQuery({ deckId }, { skip: !!cardMutationData })
  const { data: deckData } = useGetDeckQuery(deckId)

  const question = cardMutationData?.question || cardQueryData?.question
  const answer = cardMutationData?.answer || cardQueryData?.answer
  const questionImg = cardMutationData?.questionImg || cardQueryData?.questionImg
  const answerImg = cardMutationData?.answerImg || cardQueryData?.answerImg
  const cardId = cardMutationData?.id || cardQueryData?.id
  const deckName = deckData?.name

  const nextQuestionHandler = () => {
    if (cardId) {
      saveGrade({ body: { cardId, grade: currentOption }, deckId })
    }
  }

  return (
    <div className={s.pageContentWrapper}>
      <BackwardLink className={s.backLink} to={'/decks-list'} variant={'body2'}>
        Back to Decks List
      </BackwardLink>
      <Card className={s.questionCard}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          {`Learn “${deckName}”`}
        </Typography>
        <div>
          <span className={s.questionStringkWrapper}>
            <Typography as={'span'} variant={'subtitle1'}>
              {`Question: `}
            </Typography>
            <Typography as={'span'} variant={'body1'}>
              {question}
            </Typography>
          </span>
          {questionImg && <img className={clsx(s.image, s.questionImg)} src={questionImg} />}
          <Typography
            as={'span'}
            className={clsx(s.quectionNote, !questionImg && s.withoutImg)}
            variant={'body2'}
          >
            Количество попыток ответов на вопрос: 10
          </Typography>
          {!withAnswer && (
            <Button className={s.showAnswerBtn} fullWidth onClick={() => setWithAnswer(true)}>
              <Typography>Show Answer</Typography>
            </Button>
          )}
        </div>

        {withAnswer && (
          <div>
            <span className={s.answerStringkWrapper}>
              <Typography as={'span'} variant={'subtitle1'}>
                {`Answer: `}
              </Typography>
              <Typography as={'span'} variant={'body1'}>
                {answer}
              </Typography>
            </span>
            {answerImg && <img className={clsx(s.image, s.answerImg)} src={answerImg} />}
            <Typography as={'h2'} className={s.radioTitle} variant={'subtitle1'}>
              Rate yourself:
            </Typography>
            <RadioGroup
              changeHandler={setCurrentOption}
              className={s.radio}
              name={'grade'}
              options={radioOptions}
              value={currentOption}
            />
            <Button fullWidth onClick={() => setWithAnswer(false)}>
              <Typography>Next Question</Typography>
            </Button>
          </div>
        )}
      </Card>
    </div>
  )
}

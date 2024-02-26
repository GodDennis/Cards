import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { RadioGroup } from '@/components/ui/radio-group'
import { Typography } from '@/components/ui/typography'
// mockImg is temp
import mockImg from '@/layouts/images/Mask.png'
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
  const [withAnswer, setWithAnswer] = useState<boolean>(false)
  const [currentOption, setCurrentOption] = useState('1')
  //temp
  const question = 'How "This" works in JavaScript?'
  const answer = 'This is how "This" works in JavaScript'
  const questionImg = mockImg
  const answerImg = mockImg

  return (
    <div className={s.pageContentWrapper}>
      <Typography as={Link} className={s.backLink} to={'/decks-list'} variant={'body2'}>
        &#8592; Back to Decks List
      </Typography>
      <Card className={s.questionCard}>
        <div className={s.questionBlockWrapper}>
          <span className={s.questionStringkWrapper}>
            <Typography as={'span'} variant={'subtitle1'}>
              {`Question: `}
            </Typography>
            <Typography as={'span'} variant={'body1'}>
              {question}
            </Typography>
            {questionImg && <img className={s.image} src={questionImg} />}
            <Typography as={'span'} className={s.quectionNote} variant={'body2'}>
              Количество попыток ответов на вопрос: 10
            </Typography>
          </span>
          {!withAnswer && (
            <Button fullWidth onClick={() => setWithAnswer(true)}>
              <Typography>Show Answer</Typography>
            </Button>
          )}
        </div>

        {withAnswer && (
          <div className={s.answerBlockWrapper}>
            <span className={s.answerStringkWrapper}>
              <Typography as={'span'} variant={'subtitle1'}>
                {`Answer: `}
              </Typography>
              <Typography as={'span'} variant={'body1'}>
                {answer}
              </Typography>
            </span>
            {answerImg && <img className={s.image} src={answerImg} />}
            <RadioGroup
              changeHandler={setCurrentOption}
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

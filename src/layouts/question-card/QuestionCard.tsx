import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
// mokcImg is temp
import mokcImg from '@/layouts/images/Mask.png'
import clsx from 'clsx'

export const QuestionCard = () => {
  const [withAnswer, setWithAnswer] = useState<boolean>(false)
  //temp
  const mockQuestion = 'How "This" works in JavaScript?'
  const mockAnswer = 'This is how "This" works in JavaScript'
  const questionImg = mokcImg
  const answerImg = mokcImg

  return (
    <Card>
      <div className={s.questionBlockWrapper}>
        <span className={s.questionStringkWrapper}>
          <Typography as={'span'} variant={'subtitle1'}>
            Question:
          </Typography>
          <Typography as={'span'} variant={'body1'}>
            {mockQuestion}
          </Typography>
          {questionImg && <img src={questionImg} />}
          <Typography as={'span'}>Количество попыток ответов на вопрос: 10</Typography>
        </span>
      </div>
      <div className={s.answerBlockWrapper}>
        <span className={s.answerStringkWrapper}>
          <Typography as={'span'} variant={'subtitle1'}>
            Answer:
          </Typography>
          <Typography as={'span'} variant={'body1'}>
            {mockAnswer}
          </Typography>
        </span>
        {answerImg && <img src={answerImg} />}
      </div>

      <Button fullWidth>
        <Typography>{withAnswer ? 'Next Question' : 'Show Answer'}</Typography>
      </Button>
    </Card>
  )
}

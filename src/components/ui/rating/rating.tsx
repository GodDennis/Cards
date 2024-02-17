import { useState } from 'react'

import StarFilled from '@/icons/StarFilled'
import StarOutlined from '@/icons/StarOutlined'

import s from './rating.module.scss'

const Rating = () => {
  const maxRating = 5
  const [rating, setRating] = useState(0)

  const handleRatingClick = (value: number) => {
    setRating(value)
  }

  return (
    <div>
      {Array.from({ length: maxRating }, (_, index) => (
        <span className={s.star} key={index} onClick={() => handleRatingClick(index + 1)}>
          {rating >= index + 1 ? <StarFilled /> : <StarOutlined />}
        </span>
      ))}
    </div>
  )
}

export default Rating

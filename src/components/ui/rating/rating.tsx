import {StarFilled} from '@/icons/StarFilled'
import {StarOutlined} from '@/icons/StarOutlined'

import s from './rating.module.scss'
import {useState} from "react";

type RatingProps = {
    value?: number
    changeable?: boolean
}

export const Rating = ({value = 0, changeable = false}: RatingProps) => {
    const maxRating = 5
    const [rating, setRating] = useState(value || 0)

    const handleRatingClick = (value: number) => {
        setRating(value)
    }

    return changeable ? (
        <div className={s.rating}>
            {Array.from({length: maxRating}, (_, index) => (
                <span className={s.star} key={index} onClick={() => handleRatingClick(index + 1)}>
        <span className={s.star} key={index}>
          {rating >= index + 1 ? <StarFilled/> : <StarOutlined/>}
        </span>
        </span>
            ))}
        </div>
    ) : (
        <div className={s.rating}>
            {Array.from({length: maxRating}, (_, index) => (
                <span className={s.star} key={index} onClick={() => handleRatingClick(index + 1)}>
        <span className={s.star} key={index}>
          {value >= index + 1 ? <StarFilled/> : <StarOutlined/>}
        </span>
        </span>
            ))}
        </div>
    )
}

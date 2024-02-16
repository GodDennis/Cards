import { useState } from 'react';
import s from './rating.module.scss'
import StarFilled from "@/icons/StarFilled";
import StarOutlined from "@/icons/StarOutlined";


const Rating = () => {
    const maxRating = 5
    const [rating, setRating] = useState(0);

    const handleRatingClick = (value: number) => {
        setRating(value);
    };

    return (
        <div>
            {Array.from({ length: maxRating }, (_, index) => (
                <span
                    key={index}
                    onClick={() => handleRatingClick(index + 1)}
                    className={s.star}
                >
                    {rating >= index + 1 ? (
                        <StarFilled/>
                    ) : (
                        <StarOutlined/>
                    )}
                </span>
            ))}
        </div>
    );
};

export default Rating;
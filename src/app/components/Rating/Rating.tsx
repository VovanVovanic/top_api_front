"use client"
import classes from './Rating.module.scss'
import cn from 'classnames'
import { IRating } from './RatingTypes'
import StarIcon from '../../assets/images/star.svg'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { v4 } from 'uuid';

const Rating: React.FC<IRating> = ({ rating, setRating, isEditable = false }) => {

  const [ratingArray, setRatingArray] = useState<Array<ReactNode>>(new Array(5).fill(<></>))

  const getClassNames = (value: number, currentRating: number) => {
    return cn(classes.star, {
      [classes.filled]: value < currentRating,
    })
  }

  const onMouseAction = (value: number) => {
    if (!isEditable) return
    getRatings(value)
  }

  const onClickAction = (value: number) => {
    if (!isEditable || !setRating) return
    setRating(value)
  }

  const onKeyAction = (e:React.KeyboardEvent<SVGAElement>, value: number) => {
    if (!isEditable || !setRating) return
    if (e.code !== "Enter") return
    setRating(value)
  }

  function getRatings(currentRating: number) {
    const newRatings = ratingArray.map((el, i) => {
      return (
        <StarIcon
          key={v4()}
          onMouseEnter={() => onMouseAction(i + 1)}
          onMouseLeave={() => onMouseAction(rating)}
          tabIndex={isEditable ? 0 : -1}
          onKeyPress={(e)=>onKeyAction(e, i+1)}
          className={getClassNames(i, currentRating)}
          onClick={() => onClickAction(i + 1)}
        />

      )
    })
    setRatingArray(newRatings)
  }


  useEffect(() => {
    getRatings(rating)

  }, [rating])

  return (
    <div
      className={cn(classes.wrapper)}>
      {ratingArray.map((el: ReactNode) => <span key={v4()}>{el}</span>)}
    </div>
  )
}

export default Rating
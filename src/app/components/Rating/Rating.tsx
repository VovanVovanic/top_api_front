"use client"
import classes from './Rating.module.scss'
import cn from 'classnames'
import { IRating } from './RatingTypes'
import StarIcon from '../../assets/images/star.svg'
import { ReactNode, useEffect, useState } from 'react'
import { v4 } from 'uuid';
import { ForwardedRef, forwardRef } from 'react';

const Rating = forwardRef(({ rating, error,setRating, isEditable = false, className }:IRating, ref:ForwardedRef<HTMLDivElement>) => {

  const [ratingArray, setRatingArray] = useState<Array<ReactNode>>(new Array(5).fill(<></>))
  const[currentRating, setCurrentRating]=useState<number>(rating)

  const getClassNames = (value: number, currentRating: number) => {
    return cn(classes.star, {
      [classes.filled]: value < currentRating,
    })
  }

  const onMouseAction = (value: number) => {
    if (!isEditable) return
    setCurrentRating(value)
  }

  const onClickAction = (value: number) => {
    if (!isEditable || !setRating) return
    setRating(value)
    setCurrentRating(value)
  }

  const onKeyAction = (e: React.KeyboardEvent<SVGAElement>, value: number) => {
    if (!isEditable || !setRating) return
    if (e.code !== "Enter") return
    setRating(value)
  }

  function getRatings(currentRating: number) {
    const newRatings = ratingArray.map((el, i) => {
      return (
          <StarIcon
            key={v4()}
            onMouseOver={() => onMouseAction(i + 1)}
            onMouseOut={() => onMouseAction(rating)}
            tabIndex={isEditable ? 0 : -1}
            onKeyPress={(e) => onKeyAction(e, i + 1)}
            className={getClassNames(i, currentRating)}
            onClick={()=>onClickAction(i+1)}
          />
      )
    })
    setRatingArray(newRatings)
  }


  useEffect(() => {
    getRatings(currentRating)

  }, [currentRating, rating])

  return (
    <div
      className={cn(classes.wrapper,className)} ref={ref}>
      {ratingArray.map((el: ReactNode) => <span key={v4()}>{el}</span>)}
      {error && <span role="alert" className={classes.errorMessage}>{error?.message}</span>}
    </div>
  )
})

export default Rating
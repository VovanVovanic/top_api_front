'use client'
import { useState } from 'react'
import { Buttons, Paragraph, Rating, Tag } from './components/index'
import classes from './main.module.scss'

export default function Home() {
  const c = "Whereas recognition of the inherent dignity"
  const [rating, setRating] = useState<number>(2)
  return (
    <main className={classes.main}>
      <div className={classes.div}>
        <Rating
          rating={rating}
          setRating={setRating}
          isEditable />
        <Buttons
          appearance='primary'
          onAction={() => console.log('Hello from primary')}
        >Button
        </Buttons>

        <Buttons
          appearance='ghost'
          onAction={() => console.log('Hello from ghost')}
        >Button</Buttons>
      </div>
    </main>
  )
}

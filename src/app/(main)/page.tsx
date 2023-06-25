'use client'
import { useState } from 'react'
import { Buttons, Paragraph, Rating, Tag } from '../components/index'
import classes from './main.module.scss'
import cn from 'classnames'

export default function Home() {

  return (
    <div className={cn(classes.div)}>
      Main
    </div>
  )
}

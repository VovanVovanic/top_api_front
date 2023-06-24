'use client'
import { Buttons } from './components/index'
import classes from './main.module.scss'

export default function Home() {
  return (
    <main className={classes.main}>
      <div>
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

'use client'
import { Buttons, Paragraph, Tag } from './components/index'
import classes from './main.module.scss'

export default function Home() {
  const c = "Whereas recognition of the inherent dignity"
  return (
    <main className={classes.main}>
      <Tag content={"Hello World"} color={"grey"} />
      <div className={classes.div}>
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

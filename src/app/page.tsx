import {Buttons} from './components/index'
import classes from './main.module.scss'

export default function Home() {
  return (
    <main className={classes.main}>
      <div>
        <Buttons
        appearance='primary'
        onClick={()=>console.log('Hello from primary')}
        >Button
        </Buttons>

        <Buttons
        appearance='ghost'
        onClick={()=>console.log('Hello from ghost')}
        >Button</Buttons>
      </div>
    </main>
  )
}

import {Htag} from './components/index'
import classes from './main.module.scss'

export default function Home() {
  return (
    <main className={classes.main}>
      <div>
        <Htag tag={'h1'}>
          Hello World
        </Htag>
      </div>
    </main>
  )
}

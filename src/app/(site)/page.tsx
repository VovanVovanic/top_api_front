import classes from './Content.module.scss'
import cn from 'classnames'
import { getMenu, getProductsByCategory } from '../api/REST'


export default async function Home() {

  return (
    <main className={cn(classes.div)}>
      Main
    </main>
  )
}

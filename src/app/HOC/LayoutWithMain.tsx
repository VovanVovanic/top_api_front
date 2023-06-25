import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import classes from './Main.module.scss'
import cn from 'classnames'

const LayoutWithMain = <T extends Record<string, unknown> & PropsWithChildren>(Component: FunctionComponent<T>) => {
 return function withMain(props: T): ReactNode{
  return (
   <main className={cn(classes.main)}>
    <Component {...props} />
 </main>
  )
 }
}

export default LayoutWithMain
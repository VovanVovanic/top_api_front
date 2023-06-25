import classes from './Footer.module.scss'
import cn from 'classnames'
import { IFooterTypes } from './FooterTypes'

const Footer: React.FC<IFooterTypes> = ({children}) => {

 return (

  <footer className={cn(classes.footer)}>
    {children}
  </footer>

 )
}
export default Footer
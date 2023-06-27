import classes from './Footer.module.scss'
import cn from 'classnames'
import { IFooterTypes } from './FooterTypes'
import { format } from 'date-fns'

const Footer: React.FC<IFooterTypes> = ({children}) => {

 return (
  <footer className={cn(classes.footer)}>
     <span>OwlTop © 2020 - {format(new Date(), "yyyy")} All rights reserved</span>
     <a href="#" target={'blank'}>User Agreement </a>
     <a href="#" target={'blank'}>Privacy policy</a>
  </footer>

 )
}
export default Footer
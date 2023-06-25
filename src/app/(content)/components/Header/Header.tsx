import classes from './Header.module.scss'
import cn from 'classnames'
import { IHeaderTypes } from './HeaderTypes'

const Header: React.FC<IHeaderTypes> = ({children}) => {

 return (

  <header className={cn(classes.header)}>
    {children}
  </header>

 )
}
export default Header
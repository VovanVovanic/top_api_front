import LogoIcon from '../../(site)/logo.svg'
import classes from './Logo.module.scss'
import cn from 'classnames'
const Logo: React.FC = () => {
 return (
  <div className={cn(classes.logo)}>
   <LogoIcon
   className={cn(classes.icon)}
   />
   <div className={cn(classes.upper)}>PANDA'S</div>
   <div className={cn(classes.lover)}>top</div>
  </div>
 )
}

export default Logo
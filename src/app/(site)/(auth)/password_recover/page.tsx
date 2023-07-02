import Auth from '../components/Auth/Auth'
import { IAuthVariant } from '../components/Auth/AuthTypes'
import classes from './PasswordRecover.module.scss'
import cn from 'classnames'

const PasswordRecoverPage: React.FC = () => {

 return (

  <div className={cn(classes.page)}>
    <Auth variant={IAuthVariant.PasswordRecover}/>
  </div>

 )
}
export default PasswordRecoverPage
import Auth from '../components/Auth/Auth'
import { IAuthVariant } from '../components/Auth/AuthTypes'
import classes from './Register.module.scss'
import cn from 'classnames'

const RegisterPage: React.FC = () => {

 return (

  <div className={cn(classes.page)}>
    <Auth variant={IAuthVariant.Register}/>
  </div>

 )
}
export default RegisterPage
import classes from './Divider.module.scss'
import cn from 'classnames'
import { IDivider } from './DividerTypes'

const Divider: React.FC<IDivider> = ({ className, ...props }) => {
 return (
  <hr className={cn(className, classes.hr)} {...props} />
 )
}
export default Divider
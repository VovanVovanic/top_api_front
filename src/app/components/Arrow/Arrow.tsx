import ArrowIcon from '../../assets/images/arrow.svg'
import { IArrow } from './ArrowTypes'
import cn from 'classnames'
import classes from './Arrow.module.scss'


const Arrow: React.FC<IArrow> = ({ dir = 'right' }, className, ...props) => {
 const getClassNames = cn(classes.arrow,{
  [classes.arrowWright]: dir === 'right',
  [classes.arrowDown]: dir === 'down'
})
 return (
  <div className={cn(classes.wrap, className)}>
  <ArrowIcon
       className={getClassNames}
  />
  </div>

 )
}
export default Arrow
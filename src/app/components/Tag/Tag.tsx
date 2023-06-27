import classes from './Tag.module.scss'
import cn from 'classnames'
import { ITag } from './TagTypes'

const Tag: React.FC<ITag> = ({ color='gost', content,className }) => {

 const getClassNames = cn(classes.tag, className, {
  [classes.tRed]: color === 'red',
   [classes.tGreen]: color === 'green',
   [classes.tGray]: color === 'grey',
   [classes.tPrimary]: color === 'primary',
})
 return (
  <div className={getClassNames}>
   {content}
  </div>
 )
}
export default Tag
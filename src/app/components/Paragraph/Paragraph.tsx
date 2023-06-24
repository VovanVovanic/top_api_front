import classes from './Paragraph.module.scss'
import cn from 'classnames'
import { IParagraph } from './ParagraphTypes'

const Paragraph: React.FC<IParagraph> = ({ type='normal', content }) => {

 const getClassNames = cn(classes.paragraph, {
  [classes.pLarge]: type === 'large',
  [classes.pSmall]: type === 'small'
})
 return (
  <p className={getClassNames}>
   {content}
  </p>
 )
}
export default Paragraph
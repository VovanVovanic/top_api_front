import classes from './Sidebar.module.scss'
import cn from 'classnames'
import { ISidebarTypes } from './SidebarTypes'

const Sidebar: React.FC<ISidebarTypes> = ({children,className, ...props}) => {

 return (

  <aside className={cn(classes.sidebar, className, {...props})}>
    {children}
  </aside>

 )
}
export default Sidebar
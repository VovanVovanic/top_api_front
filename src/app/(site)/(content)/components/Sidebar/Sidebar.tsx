import classes from './Sidebar.module.scss'
import cn from 'classnames'
import { ISidebarTypes } from './SidebarTypes'

const Sidebar: React.FC<ISidebarTypes> = ({children}) => {

 return (

  <aside className={cn(classes.sidebar)}>
    {children}
  </aside>

 )
}
export default Sidebar
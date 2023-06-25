import classes from './SiteLayout.module.scss'
import cn from 'classnames'
import { ISiteLayoutTypes } from './SiteLayoutTypes';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import LayoutWithMain from '../HOC/LayoutWithMain';


export const metadata = {
  title: "Site Content",
  description: "Generated by create next app",
};

const SiteLayout:React.FC<ISiteLayoutTypes> = ({children})=> {
  
 return (
  <>
   <Header>Header</Header>
   <Sidebar>Sidebar</Sidebar>
    <div className={cn(classes.layout)}>
      {children}
   </div>
   <Footer>Footer</Footer>
   </>
  );
}

export default LayoutWithMain(SiteLayout)
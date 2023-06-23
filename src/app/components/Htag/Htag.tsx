import { IHtag, ITag } from "./Htag.types";
import classes from './Htag.module.scss'
import cn from 'classnames'

const Htag: React.FC<IHtag> = ({ tag, children }) => {
  
const headerStyles = (tag:ITag)=>{
    if(tag === 'h1'){
        return cn(classes.h1)
    }
    if(tag === 'h2'){
        return cn(classes.h2)
    }
    else{
        return cn(classes.h3)
    }
}
  switch (tag) {
    case "h1":
      return <h1
       className= {headerStyles(tag)}>{children}</h1>;
    case "h2":
      return <h2
       className= {headerStyles(tag)}>{children}</h2>;
    case "h3":
      return <h3
       className= {headerStyles(tag)}>{children}</h3>;
    default:
      return <></>;
  }
};

export default Htag;

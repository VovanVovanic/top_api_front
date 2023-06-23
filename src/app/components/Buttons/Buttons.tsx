import { IButtons } from "./Buttons.types"
import '@/styles/globals.css'
import cn from 'classnames'
import classes from './Buttons.module.scss'

const Buttons:React.FC<IButtons>=({appearance, children,  onClick})=>{

    const onClickHandler = ()=>{
        onClick()
    }

    return(
        <button
            className={cn(classes.button,{
                [classes.primary]:appearance === 'primary',
                [classes.ghoast]:appearance === 'ghost'
            })}
             onClick={onClickHandler}>
            {children}
        </button>
    )
}

export default Buttons
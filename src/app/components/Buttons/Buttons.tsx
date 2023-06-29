'use client'
import { IButtons } from "./Buttons.types"
import classes from './Btns.module.scss'
import cn from 'classnames'
import Arrow from "../Arrow/Arrow"

const Buttons: React.FC<IButtons> = ({ appearance, children, onAction, showReviews=false, disabled,className}) => {
    const appearenceType = appearance === 'primary'
    !!appearenceType

    const arrowDir = showReviews ? 'down' : 'right'

    const onClickHandler = () => {
        onAction()
    }
    const getClassNames = cn(classes.button,className, {
        [classes.primary]: appearenceType,
        [classes.ghost]: !appearenceType
    })
    return (
        <button
            className={getClassNames}
            onClick={onClickHandler}
            //{...props}
            disabled={disabled}
        >
            <span className={cn(classes.text)}>
                {children}
            </span>
            {
                appearance === 'ghost' ?
                    <Arrow dir={arrowDir} className={cn(classes.arrowBtn)} /> :
                    <></>}
        </button>
    )
}

export default Buttons
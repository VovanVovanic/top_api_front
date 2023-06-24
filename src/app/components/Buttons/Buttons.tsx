'use client'
import { IButtons } from "./Buttons.types"
import classes from './Btns.module.scss'
import cn from 'classnames'
import { get } from "https"
import { useState } from "react"
import Arrow from "../Arrow/Arrow"

const Buttons: React.FC<IButtons> = ({ appearance, children,onAction }) => {
    const [showReviews, setShowReviews] = useState<boolean>(false)
    const appearenceType = appearance === 'primary'
    !!appearenceType

    const arrowDir = showReviews ? 'down' : 'right'
    
    const onClickHandler = ()=>{
        onAction()
        !appearenceType && setShowReviews(!showReviews)
    }
    const getClassNames = cn(classes.button, {
        [classes.primary]: appearenceType,
        [classes.ghost]: !appearenceType
    })
    return (
        <button
            className={getClassNames}
            onClick={onClickHandler}
        >
            {children}
            {
                appearance === 'ghost' ?
                    <Arrow dir={arrowDir} /> :
                    <></>}
        </button>
    )
}

export default Buttons
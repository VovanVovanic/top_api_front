import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export type IAppearance = 'primary' | 'ghost'

export interface IButtons extends	Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'> {
    children:ReactNode
    appearance:IAppearance
    onAction: () => void
    showReviews?:boolean
}
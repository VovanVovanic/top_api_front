import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export type IAppearance = 'primary' | 'ghost'

export interface IButtons extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children:ReactNode
    appearance:IAppearance
    onAction: ()=>void
}
import { ReactNode } from "react";

export type IAppearence = 'primary' | 'ghost'

export interface IButtons{
    children:ReactNode
    appearance:IAppearence
    onClick: ()=>void
}
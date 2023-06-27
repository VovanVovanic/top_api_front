import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

export type ITag = 'h1' | 'h2' | 'h3'

export interface IHtag extends DetailedHTMLProps<HTMLAttributes<HTMLElement>,HTMLElement>{
    tag: ITag
    children: ReactNode
}
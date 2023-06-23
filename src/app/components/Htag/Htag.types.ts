import { ReactNode } from "react"

export type ITag = 'h1' | 'h2' | 'h3'

export interface IHtag{
    tag: ITag
    children: ReactNode
}
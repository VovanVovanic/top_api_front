import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IPageLayout extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
 children: ReactNode
 params:{alias:string}
}

export interface IParams{
 params: { alias: string }
}
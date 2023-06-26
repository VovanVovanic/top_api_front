import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IPageLayout extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
 children:ReactNode
}
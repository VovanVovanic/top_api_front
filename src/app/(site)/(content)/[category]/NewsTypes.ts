import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface INewsPage extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
 children:ReactNode
}
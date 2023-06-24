import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
 color?: 'gost' |'primary' | 'green' | 'grey' | 'red',
 content: string
 url?: string
}
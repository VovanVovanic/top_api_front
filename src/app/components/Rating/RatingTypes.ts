import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IRating extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
 isEditable?: boolean
 rating: number
 setRating?:(value:number)=>void
}
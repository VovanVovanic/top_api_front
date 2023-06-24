import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IRating extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement>{
 isEditable?: boolean
 rating: number
 setRating?:(value:number)=>void
}
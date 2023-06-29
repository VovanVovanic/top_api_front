import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
export interface IRating extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
 isEditable?: boolean
 rating: number
 error?:FieldError
 setRating?:(value:number)=>void
}
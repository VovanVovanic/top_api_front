import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IParagraph extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement>{
 type?: 'normal' | 'large' | 'small'
 content: string
}
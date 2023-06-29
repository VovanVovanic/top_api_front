import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IArrow extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
 dir: 'right' | 'down'
}
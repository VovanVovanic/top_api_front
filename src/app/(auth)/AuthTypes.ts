import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ILayoutTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
 children?:ReactNode
}


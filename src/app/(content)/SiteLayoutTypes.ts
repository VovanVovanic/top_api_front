import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ISiteLayoutTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
 children?:ReactNode
}
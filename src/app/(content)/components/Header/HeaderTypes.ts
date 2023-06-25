import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IHeaderTypes extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>,HTMLHeadElement>{
 children:ReactNode
}
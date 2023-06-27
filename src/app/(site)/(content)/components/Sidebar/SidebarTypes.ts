import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ISidebarTypes extends DetailedHTMLProps<HTMLAttributes<HTMLElement>,HTMLElement>{
 children:ReactNode
}
import { TopLevelCategory } from "@/app/interfaces/page.interface"
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

export interface IMenu {
 route: string
 icon: ReactNode
 name: string
 id:TopLevelCategory
}

export interface IMenuTypes extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>{

}
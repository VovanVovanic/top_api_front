import { TopLevelCategory } from "@/app/interfaces/page.interface"
import { ReactNode } from "react"

export interface IMenu{
 route: string
 icon: ReactNode
 name: string
 id:TopLevelCategory
}
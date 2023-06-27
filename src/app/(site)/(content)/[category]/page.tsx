import { IMenu } from "@/app/components/Menu/MenuTypes"
import { ICategoryParam } from "@/app/interfaces/menu.interface"
import { topMenu } from "@/app/utils/utils"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Category Page"
}

export async function generateStaticParams (){
  return topMenu.map((el: IMenu)=>({category:el.route}))
}

const CategoryPage:React.FC<ICategoryParam> = ({ params }) => {
 return (
  <div>
   {params.category}
  </div>

 )
}
export default CategoryPage
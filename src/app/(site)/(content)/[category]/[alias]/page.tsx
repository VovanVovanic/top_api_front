
import cn from 'classnames'
import { getMenu, getProductByAlias, getProductsByCategory} from '@/app/api/REST'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { IAliasParam, PageItem } from '@/app/interfaces/menu.interface'
import TopPage from '@/app/pageComponents/TopPageComponent/TopPage'


export const metadata: Metadata = {
  title: "Item Page"
}

export async function generateStaticParams (){
  const menu = await getMenu(0)
  return menu?.flatMap((item: { pages: PageItem[] }) => item.pages.map((page: { alias: string })=>({alias:page.alias})))
}


const SingleCoursePage = async ({ params } :IAliasParam) => {
  const page = await getProductByAlias(params.alias)
  if (!page) {
    notFound()
  }
  const products = await getProductsByCategory(page.category)
 
  return (
    <div>
      <TopPage firstCategory={page.firstCategory} products={products} page={page} />
    </div>
  )
}
export default SingleCoursePage
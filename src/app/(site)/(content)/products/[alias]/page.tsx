import classes from '../Product.module.scss'
import cn from 'classnames'
import { IPageLayout, IParams } from '../ProductTypes'
import { getMenu, getProductByAlias} from '@/app/api/REST'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { PageItem } from '@/app/interfaces/menu.interface'

export const metadata: Metadata = {
  title: "Product Page"
}

export async function generateStaticParams (){
  const menu = await getMenu(0)
  return menu?.flatMap((item: { pages: PageItem[] }) => item.pages.map((page: { alias: string })=>({alias:page.alias})))
}


const ProductPage = async ({ params } :IParams) => {
  const res = await getProductByAlias(params.alias)
  if (!res) {
    notFound()
  }
  return (
    <div className={cn(classes.page)}>
      Product
      {params.alias}
      {JSON.stringify(res)}
    </div>

  )
}
export default ProductPage
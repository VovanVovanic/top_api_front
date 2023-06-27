
import cn from 'classnames'
import { getMenu, getProductByAlias} from '@/app/api/REST'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { IAliasParam, PageItem } from '@/app/interfaces/menu.interface'


export const metadata: Metadata = {
  title: "Item Page"
}

export async function generateStaticParams (){
  const menu = await getMenu(0)
  return menu?.flatMap((item: { pages: PageItem[] }) => item.pages.map((page: { alias: string })=>({alias:page.alias})))
}


const SingleCoursePage = async ({ params } :IAliasParam) => {
  const res = await getProductByAlias(params.alias)
  if (!res) {
    notFound()
  }
  return (
    <div>
      <span><b>Item</b></span>
      {params.alias}
      {JSON.stringify(res)}
    </div>

  )
}
export default SingleCoursePage
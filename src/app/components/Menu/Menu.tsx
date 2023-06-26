import { getMenu } from '@/app/api/REST'
import { MenuItem, PageItem } from '@/app/interfaces/menu.interface'
import { TopLevelCategory } from '@/app/interfaces/page.interface'
import cn from 'classnames'
import { ReactNode } from 'react'
import classes from './Menu.module.scss'
import { IMenu } from './MenuTypes'
import CoursesIcon from '../../assets/images/courses.svg'
import ServisesIcon from '../../assets/images/servises.svg'
import BooksIcon from '../../assets/images/books.svg'
import ProductIcon from '../../assets/images/products.svg'

export default async function Menu() {
 const res = await getMenu(0)
  res.forEach((el:MenuItem) => {
    console.log(el._id)
  })
  
 const topMenu: IMenu[] = [
  { id: TopLevelCategory.Courses, route: 'courses', name: 'Courses', icon: <CoursesIcon /> },
  { id: TopLevelCategory.Services, route: 'services', name: 'Services', icon: <ServisesIcon /> },
  { id: TopLevelCategory.Books, route: 'books', name: 'Books', icon: <BooksIcon /> },
  { id: TopLevelCategory.Products, route: 'products', name: 'Products', icon: <ProductIcon /> },
 ]

 const buildFirstLevel = () => {
  return topMenu.map(({ id, route, name, icon }, i) => {
   return (
    <>
     <li key={route}>
      <>
       <a href={`/${route}`}
        className={cn(classes.firstLevel, {
         [classes.firstLevelActive]: id === 0
        })}
       >
        {icon}
        <span>{name}</span>
       </a>
       {id === 0 &&
        <ul className={cn(classes.secondList)}>
         {buildSecondLevel(route)}
        </ul>
       }
      </>
     </li>
    </>
   )
  })
 }

 const buildSecondLevel = (route: string) => {
  return res.map((el: MenuItem) => {
   return (
    <>
     <li key={el._id.secondCategory}
      className={cn(classes.secondLevel, {
       [classes.secondCategoryActive]: el.isOpened === true
      })}
     >
      <>
       {el._id.secondCategory}
       {el.isOpened !== true &&
        <ul>
         {buildThirdLevel(el.pages, route)}
        </ul>}
      </>
     </li>
    </>
   )
  })
 }

 const buildThirdLevel = (pages: PageItem[], route: string) => {
  return pages.map((page) => {
   return (
    <li>
     <a href={`${route}/${page.alias}`}
      className={cn(classes.thirdLevel, {
       [classes.thirLevelActive]: true
      })}
     >
      {page.title}
     </a>
    </li>
   )
  })
 }

 return (
  <ul className={cn(classes.menu)}>
    {buildFirstLevel()} 
  </ul>
 )
}

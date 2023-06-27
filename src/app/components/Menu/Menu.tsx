"use client"
import { getMenu } from '@/app/api/REST'
import { MenuItem, PageItem } from '@/app/interfaces/menu.interface'
import cn from 'classnames'
import { useContext, useEffect, useState } from 'react'
import classes from './Menu.module.scss'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { AppContext } from '@/app/context/MenuContest'
import { topMenu } from '@/app/utils/utils'



const Menu: React.FC = () => {
  const [isOpenOnPageRefresh, setIsOpenOnPageRefresh] = useState<boolean>(true)
  const { menu, setMenu, firstCategory } = useContext(AppContext)

  useEffect(() => {
    (async () => {
      const r = await getMenu(0)
      setMenu && setMenu(r)
    })()

  }, [])
  const router = useRouter()
  const pathname = usePathname()


  const setThirdSubMenuOpened = (category: string) => {
    setIsOpenOnPageRefresh(false)
    router.push('/courses')
    const newArr = menu.map((el) => {
      if (el._id.secondCategory === category) {
        return { ...el, isOpened: !el.isOpened }
      }
      else {
        return { ...el, isOpened: false }
      }
    })
    setMenu && setMenu(newArr)
  }
  const buildFirstLevel = () => {
    return topMenu.map(({ id, route, name, icon }, i) => {
      return (
        <>
          <li key={route}>
            <>
              <Link href={`/${route}`}
                className={cn(classes.firstLevel, {
                  [classes.firstLevelActive]: id === 0
                })}
              >

                {icon}
                <span>{name}</span>

              </Link>

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

    return menu.map((el: MenuItem) => {
      if (isOpenOnPageRefresh && el.pages.map((p) => p.alias).includes(pathname.split('/')[2])) {
        el.isOpened = true
      }

      return (
        <>
          <li key={el._id.secondCategory}
            className={cn(classes.secondLevel, {
              [classes.secondCategoryActive]: el.isOpened === true
            })}
          >
            <>
              <span
                onClick={() => setThirdSubMenuOpened(el._id.secondCategory)}
              >{el._id.secondCategory}</span>
              {el.isOpened &&
                <ul>
                  {buildThirdLevel(el.pages, route, el.isOpened)}
                </ul>}
            </>
          </li>
        </>
      )
    })
  }

  const buildThirdLevel = (pages: PageItem[], route: string, open: boolean) => {
    return pages.map((page) => {
      return (
        <li key={page.alias}>
          <Link href={`/${route}/${page.alias}`}
            className={cn(classes.thirdLevel, {
              [classes.thirdLevelActive]: page.alias === pathname.split('/')[2]
            })}
          >

            {page.title}

          </Link>

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
export default Menu
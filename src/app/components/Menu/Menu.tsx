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
import { v4 } from 'uuid';
import { motion } from 'framer-motion'
import { Open_Sans } from 'next/font/google'
import { IMenu, IMenuTypes } from './MenuTypes'



const Menu: React.FC<IMenuTypes> = ({className, ...props}) => {
  const [isOpenOnPageRefresh, setIsOpenOnPageRefresh] = useState<boolean>(true)
  const { menu, setMenu, firstCategory } = useContext(AppContext)

  const[subMenuID, setSubMenuID]=useState<string>("")


  const variants = {

    visible: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.2,
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    },
    hidden: {
      //clipPath: "inset(10% 50% 90% 50% round 10px)",
      heigght:0,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0
      }
    }

  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 30,
      transition: { type: "spring", stiffness: 200, damping:30}
    },
    hidden: { opacity: 0, height: 0, transition: { duration:0} }
  };
  useEffect(() => {
    (async () => {
      const r = await getMenu(0)
      setMenu && setMenu(r)
    })()

  }, [])

  const pathname = usePathname()

  const setThirdSubMenuOpened = (category: string) => {

    const newArr = menu.map((el) => {
      if (el._id.secondCategory === category) {
        return { ...el, isOpened: !el.isOpened }
      }
      else {
        return { ...el, isOpened: false }
      }
    })
    setSubMenuID(category)
    setIsOpenOnPageRefresh(false)
    setMenu && setMenu(newArr)

  }
  const buildFirstLevel = () => {
    return topMenu.map(({ id, route, name, icon }, i) => {
      return (

        <li key={v4()}>
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

      )
    })
  }

  const buildSecondLevel = (route: string) => {

    return menu.map((el: MenuItem) => {
      if (isOpenOnPageRefresh && el.pages.map((p) => p.alias).includes(pathname.split('/')[2])) {
        el.isOpened = true
      }

      return (

        <li key={v4()}

          className={cn(classes.secondLevel)}
        >
          <span
            onClick={() => setThirdSubMenuOpened(el._id.secondCategory)}
          >{el._id.secondCategory}</span>

          <motion.ul
            layout
            initial={!el.isOpened ? 'hidden' : 'visible'}
            animate={el.isOpened ? 'visible' : 'hidden'}
            variants={variants}
            className={cn(classes.secondListChild)}
          >
            {buildThirdLevel(el.pages, route, el.isOpened ?? el.isOpened)}
          </motion.ul>

        </li>

      )
    })
  }

  const buildThirdLevel = (pages: PageItem[], route: string, open?: boolean) => {
    return pages.map((page) => {
      return (
        <motion.li
          key={v4()}
          variants={variantsChildren}
          animate={open ? 'visible' : 'hidden'}
        >
          <Link href={`/${route}/${page.alias}`}
            className={cn(classes.thirdLevel, {
              [classes.thirdLevelActive]: page.alias === pathname.split('/')[2]
            })}
          >

            {page.title}

          </Link>

        </motion.li>
      )
    })
  }

  return (
    <ul className={cn(classes.menu, className)} {...props}>
      {buildFirstLevel()}
    </ul>
  )
}
export default Menu
"use client"
import classes from './Header.module.scss'
import cn from 'classnames'
import { IHeaderTypes } from './HeaderTypes'
import { useEffect, useState } from 'react'

import { motion, useReducedMotion } from 'framer-motion'
import { Logo, Menu, Search } from '@/app/components'
import BtnIcon from '@/app/components/BtnIcon/BtnIcon'
import Sidebar from '../Sidebar/Sidebar'
import { usePathname, useRouter } from 'next/navigation'

const Header: React.FC<IHeaderTypes> = ({ children, className, ...props }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();


  useEffect(() => {
    setIsOpened(false);
  }, [pathname]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20
      }
    },
    closed: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: '100%',
      transition:{delay: 0.1}
    }
  };



  return (
    <header className={cn(className, classes.header)} {...props}>
      <Logo />
      {!isOpened && <BtnIcon appearance='primary' icon='menu' onClick={() => setIsOpened(true)} />}
      <motion.div
        className={classes.mobileMenu}
        variants={variants}
        initial={'closed'}
        animate={isOpened ? 'opened' : 'closed'}
      >
        <Logo />
          <Search />
          <Menu  />
        {isOpened && <BtnIcon className={classes.menuClose} appearance='white' icon='close' onClick={() => setIsOpened(false)} />}
      </motion.div>
    </header>
  );
}
export default Header
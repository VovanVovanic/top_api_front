"use client"
import classes from './Sort.module.scss'
import cn from 'classnames'
import { ISort, SortEnum } from './SortTypes'
import SortIcon from '../../assets/images/sort.svg'
import { sortReducer } from '@/app/utils/sort'
import { useReducer } from 'react'

const Sort: React.FC<ISort> = ({ sort, setSort, className, ...props }) => {

 return (
  <div className={cn(classes.sort, className)}>
   <span
    className={cn({
     [classes.active]: sort === SortEnum.Rating
    })}
    onClick={() => setSort && setSort(SortEnum.Rating)}>
    <SortIcon className={cn(classes.icon)} /> By Rating
   </span>

   <span
    className={cn({
     [classes.active]: sort === SortEnum.Price
    })}
    onClick={() => setSort && setSort(SortEnum.Price)}>
    <SortIcon className={cn(classes.icon)} /> By Price
   </span>
  </div>
 )
}

export default Sort
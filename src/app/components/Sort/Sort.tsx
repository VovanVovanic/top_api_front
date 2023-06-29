"use client"
import classes from './Sort.module.scss'
import cn from 'classnames'
import { ISort, SortEnum } from './SortTypes'
import SortIcon from '../../assets/images/sort.svg'
import { getProductsByCategory } from '@/app/api/REST'

const Sort: React.FC<ISort> = ({sort=0, setSort, className, ...props }) => {

 const onTest = async() => {
  const t = await getProductsByCategory("Big Data")
  console.log(t)
 }
 return (
  <div className={cn(classes.sort, className)}>
   <span 
   className={cn({
    [classes.active]:sort === SortEnum.Rating
   })}
   onClick={()=>onTest()}>
    <SortIcon className={cn(classes.icon)} /> By Rating
   </span>

   <span 
   className={cn({
    [classes.active]:sort === SortEnum.Price
   })}
   onClick={()=>setSort && setSort(SortEnum.Price)}>
    <SortIcon className={cn(classes.icon)} /> By Price
   </span>
  </div>
 )
}

export default Sort
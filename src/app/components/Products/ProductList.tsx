"use client"

import { sortReducer } from "@/app/utils/sort";
import { useReducer } from "react";
import { Htag, Product, Tag } from "..";
import { SortEnum } from "../Sort/SortTypes";
import { IProducts } from "./ProductsTypes"
import cn from 'classnames'
import classes from './Products.module.scss'
import Sort from "../Sort/Sort";

const ProductList: React.FC<IProducts> = ({ products, title, className, ...props }) => {
 const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });


 const setSort = (sort: SortEnum) => {
  dispathSort({ type: sort });
 };
 console.log(sortedProducts, "sorted")
 return (
  <>
   <div className={classes.title}>
    <Htag tag='h1'>{title}</Htag>
    {products && <Tag color='grey' aria-label={products.length + 'элементов'} content={products.length} />}
    <Sort setSort={setSort} sort={sort} />
   </div>
   <div role='list' className={cn(classes.productList, className)} {...props}>

    {sortedProducts.map(p => (<Product
     layout
     role='listitem' key={p._id} product={p} />))}
   </div>
  </>
 )
}

export default ProductList
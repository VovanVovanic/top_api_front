import { ProductModel } from "@/app/interfaces/product.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IProducts extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
 products: ProductModel[],
 title:string
}
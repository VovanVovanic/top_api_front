import { ProductModel } from '@/app/interfaces/product.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface IProduct extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: ProductModel;
}
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IReviewForm extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	productId: string;
	isOpened: boolean;
}

export interface IForm{
 name: string
 title: string
 description: string
 rating:number
}
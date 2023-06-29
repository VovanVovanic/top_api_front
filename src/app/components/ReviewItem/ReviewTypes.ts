import { ReviewModel } from '@/app/interfaces/product.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IReview extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	review: ReviewModel;
}
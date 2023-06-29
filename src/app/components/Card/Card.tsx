import classes from './Card.module.scss'
import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react';
import { ICard } from './CardTypes';

const Card = forwardRef(({
	color = 'white',
	children,
	className,
	...props
}: ICard, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	console.log(ref, "refref")
	return (
		<div className={cn(classes.card, className, {
			[classes.blue]: color == 'blue'
		})}
			ref={ref}
		{...props}
		>
			{children}
		</div>
	);
});

export default Card
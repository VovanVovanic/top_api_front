import classes from './Card.module.scss'
import cn from 'classnames'
import { ForwardedRef, forwardRef, RefAttributes } from 'react';
import { ICard } from './CardTypes';

const Card:React.FC<ICard & RefAttributes<HTMLDivElement>> = forwardRef(({ color = 'white', children,className, ...props },ref) => {
	return (
		<div className={cn(classes.card,className,{
			[classes.blue]: color == 'blue'
		})}
			ref={ref}

		>
			{children}
		</div>
	);
});

export default Card
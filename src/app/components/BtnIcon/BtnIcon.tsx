import classes from './BtnIcon.module.scss';

import cn from 'classnames';
import React from 'react';
import { IButtonIcon, icons } from './BtnIconTypes';

const ButtonIcon: React.FC<IButtonIcon> = ({ appearance, icon, className, ...props }) => {
	console.log(icon, appearance)
	const IconComp = icons[icon];
	return (
		<button
			className={cn(classes.button, className, {
				[classes.primary]: appearance == 'primary',
				[classes.white]: appearance == 'white',
			})}
			{...props}
		>
			<IconComp />
		</button>
	);
};

export default ButtonIcon
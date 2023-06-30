import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import up from '../../assets/images/scroll.svg'
import close from '../../assets/images/mobileClose.svg'
import menu from '../../assets/images/mobileMenu.svg'

export const icons = {
	up,
	close,
	menu
};

export type IconName = keyof typeof icons;

export interface IButtonIcon extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: IconName;
	appearance: 'primary' | 'white';
}
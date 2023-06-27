import { TopLevelCategory } from './page.interface';

export interface PageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
	isActive: boolean
}

export interface MenuItem {
	_id: {
		secondCategory: string;
	};
	isOpened?: boolean;
	pages: PageItem[];
}

export interface FirstLevelMenuItem {
	route: string;
	name: string;
	icon: JSX.Element;
	id: TopLevelCategory;
}

export interface IAliasParam{
	 params: { alias: string }
}
export interface ICategoryParam{
	params: { category: string }
}
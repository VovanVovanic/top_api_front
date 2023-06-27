import { TopLevelCategory, TopPageModel } from "@/app/interfaces/page.interface";
import { ProductModel } from "@/app/interfaces/product.interface";

export interface ITopPage {
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}
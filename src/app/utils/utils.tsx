import { IMenu } from "../components/Menu/MenuTypes";
import { TopLevelCategory } from "../interfaces/page.interface";
import CoursesIcon from '../assets/images/courses.svg'
import ServisesIcon from '../assets/images/servises.svg'
import BooksIcon from '../assets/images/books.svg'
import ProductIcon from '../assets/images/products.svg'

export   const topMenu: IMenu[] = [
 { id: TopLevelCategory.Courses, route: 'courses', name: 'Courses', icon: <CoursesIcon /> },
 { id: TopLevelCategory.Services, route: 'services', name: 'Services', icon: <ServisesIcon /> },
 { id: TopLevelCategory.Books, route: 'books', name: 'Books', icon: <BooksIcon /> },
 { id: TopLevelCategory.Products, route: 'products', name: 'Products', icon: <ProductIcon /> },
]


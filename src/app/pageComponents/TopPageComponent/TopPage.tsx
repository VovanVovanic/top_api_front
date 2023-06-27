import classes from './TopPage.module.scss'
import cn from 'classnames'
import { ITopPage } from './TopPageTypes';
import { Advantages, HHData, Htag, Tag } from '@/app/components';
import { TopLevelCategory } from '@/app/interfaces/page.interface';

const TopPage: React.FC<ITopPage> = ({ page, products, firstCategory }) => {

console.log(page.advantages, page.advantages?.length)
 return (
  <div className={classes.wrapper}>
   <div className={classes.title}>
    <Htag tag='h1'>{page.title}</Htag>
    {products && <Tag color='grey' aria-label={products.length + 'элементов'} content={products.length} />}

   </div>

   <div className={classes.hhTitle}>
    <Htag tag='h2'>Вакансии - {page.category}</Htag>
    <Tag color='red' content={'hh.ru'} />
   </div>
   {firstCategory == TopLevelCategory.Courses && page.hh && <HHData {...page.hh} />}
   {page.advantages && page.advantages.length > 0 && <>
    <Htag tag='h2' className='mb-6'>Преимущeства</Htag>
    <Advantages advantages={page.advantages} />
   </>
   }
   {page.seoText && <div className={classes.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
   <Htag tag='h2' className='mb-5 mt-6'>Получаемые навыки</Htag>
   {page.tags.map(t => <Tag key={t} color='primary' content={t} className='mr-2.5 mb-2.5'/>)}
  </div>
 );
};

export default TopPage
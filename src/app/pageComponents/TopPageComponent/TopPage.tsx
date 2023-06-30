import classes from './TopPage.module.scss'
import cn from 'classnames'
import { ITopPage } from './TopPageTypes';
import { Advantages, HHData, Htag, ProductList, Tag } from '@/app/components';
import { TopLevelCategory } from '@/app/interfaces/page.interface';
import Sort from '@/app/components/Sort/Sort';
import Scroll from '@/app/components/Scroll/Scroll';

const TopPage: React.FC<ITopPage> = ({ page, products, firstCategory }) => {

  return (
    <div className={classes.wrapper}>

      <ProductList products={products} title={page.title} />

      <div className={classes.hhTitle}>
        <Htag tag='h2'>Vacansies - {page.category}</Htag>
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
      {page.tags.map(t => <Tag key={t} color='primary' content={t} className='mr-2.5 mb-2.5' />)}
      <Scroll />
    </div>
  );
};

export default TopPage
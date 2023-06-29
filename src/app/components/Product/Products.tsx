"use client"
import classes from './Product.module.scss'
import cn from 'classnames'
import { IProduct } from './ProductTypes';
import Card from '../Card/Card';
import Tag from '../Tag/Tag';
import Rating from '../Rating/Rating';
import Divider from '../Divider/Divider';
import Buttons from '../Buttons/Buttons';
import Image from 'next/image'
import { useState } from 'react';
import Review from '../ReviewItem/Review';
import { v4 } from 'uuid';

export const Product = ({ product, className, ...props }: IProduct) => {

  const [reviewsOpen, setReviewsOpen] = useState<boolean>(false)

  const variants = {
    visible: { opacity: 1, height: 'auto' },
    hidden: { opacity: 0, height: 0 }
  };

  const discount = product.price - product.oldPrice
  return (
    <div className={className} {...props} >
      <Card className={classes.product}>
        <div className={classes.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
        <div className={classes.title}>{product.title}</div>
        <div className={classes.price}>
          <span>{product.price}</span>
          {product.oldPrice && <Tag
            className={classes.oldPrice}
            color="green"
            content={`${discount}`}>
          </Tag>}
        </div>
        <div className={classes.credit}>
          {product.credit} / <span className={classes.month}>month</span>
        </div>
        <div className={classes.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={classes.tags}>{product.categories.map(c => <Tag key={c} className={classes.category} color='gost' content={c} />)}</div>
        <div className={classes.priceTitle} aria-hidden={true}>price</div>
        <div className={classes.creditTitle} aria-hidden={true}>credit</div>
        <div className={classes.rateTitle}><a href="#ref" >{product.reviewCount} reviews</a></div>
        <Divider className={classes.hr} />
        <div className={classes.description}>{product.description}</div>
        <div className={classes.feature}>
          {product.characteristics.map(c => (
            <div className={classes.characteristics} key={c.name}>
              <span className={classes.characteristicsName}>{c.name}</span>
              <span className={classes.characteristicsDots}></span>
              <span className={classes.characteristicsValue}>{c.value}</span>
            </div>
          ))}
        </div>
        <div className={classes.advBlock}>
          {product.advantages && <div className={classes.advantages}>
            <div className={classes.advTitle}>Advantages</div>
            <div>{product.advantages}</div>
          </div>}
          {product.disadvantages && <div className={classes.disadvantages}>
            <div className={classes.advTitle}>Disadvantages</div>
            <div>{product.disadvantages}</div>
          </div>}
        </div>
        <Divider className={cn(classes.hr, classes.hr2)} />
        <div className={classes.actions}>
          <Buttons appearance='primary' onAction={() => { }}>More ...</Buttons>
          <Buttons
            appearance='ghost'
            className={classes.reviewButton}
            showReviews={reviewsOpen}
           disabled={product.reviews.length > 0 ? false : true}
            onAction={() => setReviewsOpen(!reviewsOpen)}
          >{reviewsOpen ? 'Close ' : 'Read '}reviews</Buttons>
        </div>
      </Card>
      {(product.reviews.length && reviewsOpen) ?
        <Card color='blue'>
          {product.reviews.map((el) => {
            return (
              <Review
                key={v4()}
                review={el} />
            )
          })}
        </Card> : ""
      }
    </div>
  );
};
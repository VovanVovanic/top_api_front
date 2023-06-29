import classes from './Review.module.scss'
import cn from 'classnames'
import { format } from 'date-fns';
import UserIcon from '../../assets/images/user.svg'
import { IReview } from './ReviewTypes';
import { Divider, Rating } from '..';



const Review:React.FC<IReview> = ({ review, className, ...props }): JSX.Element => {
	const { name, title, description, createdAt, rating } = review;
 return (
  <>
		<div className={cn(classes.review, className)}
			{...props}
		>
			<UserIcon className={classes.user} />
			<div className={classes.title}>
				<span className={classes.name}>{name}:</span>&nbsp;&nbsp;
				<span>{title}</span>
			</div>
			<div className={classes.date}>
				{format(new Date(createdAt), 'dd MMMM yyyy')}
			</div>
			<div className={classes.reviewRating}>
				<Rating rating={rating} />
			</div>
			<div className={classes.description}>
				{description}
			</div>
   </div>
   <Divider />
   </>
	);
};

export default Review
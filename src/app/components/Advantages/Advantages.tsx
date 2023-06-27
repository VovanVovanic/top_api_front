import classes from './Advantages.module.scss'
import cn from 'classnames';
import { IAdvantages } from './AdvantagesTypes';
import CheckIcon from '../../assets/images/check.svg'

const Advantages: React.FC<IAdvantages> = ({ advantages }) => {
	return (
		<>
			{advantages.map(a => (
				<div key={a._id} className={cn(classes.advantage)}>
					<div className={cn(classes.icon)}>
						<CheckIcon />
					</div>
					<div className={cn(classes.title)}>{a.title}</div>
					<div className={cn(classes.line)} />
					<div className={cn(classes.description)}>{a.description}</div>
				</div>

			))}
		</>
	);
};

export default Advantages
import classes from './HHData.module.scss'
import cn from 'classnames'
import RateIcon from '../../assets/images/rate.svg'
import { IHHData } from './HHDataTypes'
import Card from '../Card/Card'

const HHData: React.FC<IHHData> = ({ count, juniorSalary, middleSalary, seniorSalary }) => {


 return (
  <div className={cn(classes.hh)}>
   <Card className={cn(classes.count)}>
    <div className={cn(classes.title)}>Vacancy count</div>
    <div className={cn(classes.countValue)}>{count}</div>
   </Card>
   <Card className={cn(classes.salary)}>
    <div className={cn(classes.salaryItem)}>
     <div className={cn(classes.title)}>Junior</div>
     <div className={cn(classes.salaryValue)}>{juniorSalary}</div>
     <div className={cn(classes.rate)}>
      <RateIcon className={cn(classes.filled)} />
      <RateIcon />
      <RateIcon />
     </div>
    </div>
    <div className={cn(classes.salaryItem)}>
     <div className={cn(classes.title)}>Middle</div>
     <div className={cn(classes.salaryValue)}>{middleSalary}</div>
     <div className={cn(classes.rate)}>
      <RateIcon className={cn(classes.filled)} />
      <RateIcon className={cn(classes.filled)} />
      <RateIcon />
     </div>
    </div>
    <div className={cn(classes.salaryItem)}>
     <div className={cn(classes.title)}>Senior</div>
     <div className={cn(classes.salaryValue)}>{seniorSalary}</div>
     <div className={cn(classes.rate)}>
      <RateIcon className={cn(classes.filled)} />
      <RateIcon className={cn(classes.filled)} />
      <RateIcon className={cn(classes.filled)} />
     </div>
    </div>
   </Card>
  </div>
 )
}

export default HHData
import classes from './Input.module.scss'
import cn from 'classnames'
import { IInput } from './InputTypes'
import { ForwardedRef, forwardRef } from 'react';

const Input = forwardRef(({ error,className, ...props }:IInput, ref:ForwardedRef<HTMLInputElement>) => {
 return (
  <div className={cn(className, classes.inputWrapper)}>
  <input className={cn(classes.input, {
   [classes.error]: error
  })} ref={ref} {...props} />
  {error && <span role="alert" className={classes.errorMessage}>{error?.message}</span>}
 </div>
 )
})

export default Input
import classes from './TextArea.module.scss'
import cn from 'classnames'

import { ForwardedRef, forwardRef } from 'react';
import { ITextarea } from './TextAreaTypes';

 const Textarea = forwardRef(({ error, className, ...props }:  ITextarea, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
	return (
		<div className={cn(classes.textareaWrapper, className)}>
			<textarea className={cn(classes.textarea, {
				[classes.error]: error
			})} ref={ref} {...props} />
			{error && <span role="alert" className={classes.errorMessage}>{error.message}</span>}
		</div>
	);
 });

 export default Textarea
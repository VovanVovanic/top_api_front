
"use client"
import classes from './Scroll.module.scss'
import cn from 'classnames'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import ScrollIcon from '../../assets/images/scroll.svg'
import { useScrollY } from '@/app/utils/scroll';

const Scroll = (): JSX.Element => {
	const controls = useAnimation();
	const y = useScrollY();

	useEffect(() => {
		controls.start({ opacity: y / document.body.scrollHeight });
	}, [y, controls]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<motion.div
			className={cn(classes.scroll)}
			animate={controls}
			initial={{ opacity: 0 }}
		>
			<ScrollIcon aria-label="Up" onClick={scrollToTop} />
		</motion.div>
	);
};

export default Scroll
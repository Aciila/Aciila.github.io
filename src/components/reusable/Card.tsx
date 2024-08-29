import React from 'react';
import { motion } from 'framer-motion';
import Title from './Title';
import Text from './Text';

interface IProps {
	image: string;
	name: string;
	desc: string;
	link: string;
}

const Card = ({ image, name, desc, link }: IProps) => {
	return (
		<motion.div
			className='rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-white flex flex-col justify-between'
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<figure className='tablets:h-[150px] lg:h-[250px] overflow-hidden'>
				<motion.img
					src={image}
					alt={name}
					className='rounded-t-xl'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.5 }}
				/>
			</figure>
			<div>
				<Title styles='mt-8 px-4' level={3}>
					{name}
				</Title>
				<Text styles='px-4'>{desc}</Text>
				<a
					className='px-4 pb-4 mt-4 block text-blue-500'
					href={link}
					target='_blank'
				>
					Go to
				</a>
			</div>
		</motion.div>
	);
};

export default Card;

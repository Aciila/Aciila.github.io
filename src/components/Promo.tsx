import React from 'react';
import Container from './reusable/Container';
import Title from './reusable/Title';
import Text from './reusable/Text';

const Promo = () => (
	<section className='promo pt-20'>
		<Container>
			<div className='flex items-center justify-center gap-7'>
				<div className='basis-1/2'>
					<Title>Hello, I&apos;m Vladislav!</Title>
					<Text styles='mt-4'>Frontend-developer from Ukraine</Text>
				</div>
				<figure className='basis-1/3 relative rounded-3xl overflow-hidden'>
					<img
						className='w-auto'
						src='/assets/promo.jpeg'
						alt='programmer blur-sm'
					/>
				</figure>
			</div>
		</Container>
	</section>
);

export default Promo;

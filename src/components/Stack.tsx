import React from 'react';
import Container from './reusable/Container';
import Title from './reusable/Title';
import { stack } from 'portfolio/constant/stack';
import Text from './reusable/Text';

const Stack = () => (
	<section className='mt-20'>
		<Container>
			<div>
				<Title styles='text-center' level={2}>
					MY STACK
				</Title>
				<ul className='mt-8 grid grid-cols-4 gap-6 items-center mobile:grid-cols-2'>
					{stack.map((tech, idx) => (
						<li className='flex items-center justify-center flex-col' key={idx}>
							<img width={48} height={48} src={tech.asset} alt={tech.name} />
							<Text styles='mt-4'>{tech.name}</Text>
						</li>
					))}
				</ul>
			</div>
		</Container>
	</section>
);

export default Stack;

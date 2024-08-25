import React from 'react';
import Container from './reusable/Container';
import Title from './reusable/Title';
import Text from './reusable/Text';

const About = () => (
	<section className='mt-20'>
		<Container>
			<div>
				<Title styles='text-center' level={2}>
					ABOUT ME
				</Title>
				<Text styles='mt-4'>
					I&apos;m a Frontend Software Engineer with 3+ years of commercial
					experience (React.js, JavaScript) with some experience using Flutter
					and React Native for mobile development.
				</Text>
				<Text>
					I have a great scope of hands-on experience in different project
					domains: e-commerce, web3, crypto, NFT marketplace, FinTech, and more.
					I am proficient in HTML5, CSS3, SASS, JavaScript, React, Bootstrap,
					jQuery, Responsive Design, REST APIs, GitHub, Git, and Redux.
				</Text>
				<Text>
					I&apos;d characterize myself as an open-minded, organized, and
					diligent individual who is always eager to learn new things. I am
					committed to staying up with the latest industry trends and adopting
					new technologies into projects. In the future, I would like to become
					an expert in Machine Learning (ML). I&apos;m open to relocation abroad
					and also to work remotely
				</Text>
			</div>
		</Container>
	</section>
);

export default About;

import React from 'react';
import Container from './reusable/Container';
import Title from './reusable/Title';
import Text from './reusable/Text';

const Experience = () => (
	<section className='mt-20'>
		<Container>
			<div>
				<Title styles='text-center' level={2}>
					WORK EXPERIENCE
				</Title>
				<div className='mt-8'>
					<figure>
						<img src='/assets/flysoft.png' alt='flysoft' />
					</figure>
					<Title styles='mt-4' level={3}>
						Frontend Developer - FlySoft
					</Title>
					<Text styles='text-gray'>Sep 2021 - Present</Text>
					<ul className='list-disc ml-4'>
						<li>
							<Text>
								coding using React, Javascript, CSS, GraphQL, Flutter, and React
								Native
							</Text>
						</li>
						<li>
							<Text>
								working with the React environment and emerging technologies
								related
							</Text>
						</li>
						<li>
							<Text>responsive and cross-browser development</Text>
						</li>
						<li>
							<Text>building frontend that pixel-perfect match mockups</Text>
						</li>
						<li>
							<Text>
								communication with all the team members and departments
							</Text>
						</li>
						<li>
							<Text>working on multiple projects at once</Text>
						</li>
						<li>
							<Text>
								using professional software engineering practices & best
								practices for the full software development life cycle,
								including Agile, coding standards, source control management,
								and operations.
							</Text>
						</li>
					</ul>
				</div>
				<div className='mt-20'>
					<figure>
						<img src='/assets/oscorp.webp' alt='oscorp' />
					</figure>
					<Title styles='mt-4' level={3}>
						Frontend Developer - One Smile Corporation
					</Title>
					<Text styles='text-gray'> Feb 2021 – Sep 2021</Text>
					<ul className='list-disc ml-4'>
						<li>
							<Text>
								worked with HTML/CSS for building and styling user interfaces
							</Text>
						</li>
						<li>
							<Text>was building and maintaining UI Components</Text>
						</li>
						<li>
							<Text>
								followed established coding standards and conventions within the
								development team.
							</Text>
						</li>
					</ul>
				</div>
			</div>
		</Container>
	</section>
);

export default Experience;

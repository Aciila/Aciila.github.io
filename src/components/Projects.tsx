import React from 'react';
import Container from './reusable/Container';
import Title from './reusable/Title';
import { projects } from 'portfolio/constant/projects';
import Card from './reusable/Card';

const Projects = () => (
	<section className='mt-20 pb-8'>
		<Container>
			<div>
				<Title styles='text-center' level={2}>
					PROJECTS
				</Title>
				<div className='mt-8 grid grid-cols-2 gap-20'>
					{projects.map((project, idx) => (
						<Card
							name={project.name}
							key={idx}
							link={project.link}
							image={project.image}
							desc={project.desc}
						/>
					))}
				</div>
			</div>
		</Container>
	</section>
);

export default Projects;

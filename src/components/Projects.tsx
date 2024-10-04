import React, { useEffect, useState } from 'react';
import Container from './reusable/Container';
import Title from './reusable/Title';
import Card from './reusable/Card';
import { getPosts } from 'portfolio/api/posts';

const Projects = () => {
	const [projects, setProjects] = useState<
		{ name: string; link: string; desc: string; image: string }[]
	>([]);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (isMounted) getPosts().then((res) => setProjects(res?.data.posts));
	}, [isMounted]);

	return (
		<section className='mt-20 pb-8'>
			<Container>
				<div>
					<Title styles='text-center' level={2}>
						PROJECTS
					</Title>
					<div className='mt-8 grid grid-cols-2 gap-20 mobile:grid-cols-1'>
						{projects.map((project, idx) => (
							<Card
								name={project.name}
								key={idx}
								link={project.link}
								image={`https://portfolio-be-n946.onrender.com/${project.image}`}
								desc={project.desc}
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Projects;

'use client';

import React from 'react';
import { Source_Code_Pro } from 'next/font/google';
import About from '../components/About';
import Experience from '../components/Experience';
import Promo from '../components/Promo';
import Projects from '../components/Projects';
import Stack from '../components/Stack';
import ParticleEffect from 'portfolio/components/reusable/Canvas';

const source_code_pro = Source_Code_Pro({ subsets: ['latin'] });

const App = () => {
	return (
		<div className={`${source_code_pro.className} relative`}>
			<Promo />
			<About />
			<Experience />
			<Stack />
			<Projects />
			<ParticleEffect />
		</div>
	);
};

export default App;

import React from 'react';

// Define the props interface
interface TitleProps {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	children: React.ReactNode;
	styles?: string;
}

const Title: React.FC<TitleProps> = ({ level = 1, children, styles }) => {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements;

	const baseClass = `${styles} font-regular`;
	const levelClass =
		level === 1
			? 'text-5xl font-bold'
			: level === 2
			? 'text-3xl font-bold'
			: level === 3
			? 'text-2xl font-medium'
			: level === 4
			? 'text-xl font-medium'
			: level === 5
			? 'text-lg font-medium'
			: 'text-base';

	const className = `${baseClass} ${levelClass}`;

	return <Tag className={className}>{children}</Tag>;
};

export default Title;

import React from 'react';

interface IProps {
	children: JSX.Element;
}

const Container = ({ children }: IProps) => {
	return (
		<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl'>
			{children}
		</div>
	);
};

export default Container;

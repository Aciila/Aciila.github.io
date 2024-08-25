import React from 'react';

interface IProps {
	children: string;
	styles?: string;
}

const Text = ({ children, styles }: IProps) => {
	return <p className={`${styles} text-xl`}>{children}</p>;
};

export default Text;

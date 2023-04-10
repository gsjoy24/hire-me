import React from 'react';

const SectionTitle = ({ children }) => {
	return (
		<div>
			<h1 className='py-24 bg-slate-100  text-4xl text-center font-bold'>{children}</h1>
		</div>
	);
};

export default SectionTitle;

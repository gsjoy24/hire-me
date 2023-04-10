import React from 'react';

const SectionTitle = ({ children }) => {
	return (
		<div>
			<h1 className='py-24 bg-gradient-to-tr from-violet-200 to-sky-200 text-gray-700 text-4xl text-center font-bold'>{children}</h1>
		</div>
	);
};

export default SectionTitle;

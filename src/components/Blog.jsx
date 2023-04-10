import React from 'react';
import SectionTitle from './SectionTitle';

const Blog = () => {
	return (
		<div>
			<SectionTitle>Blog</SectionTitle>
			<div className='my-5 max-w-4xl mx-auto'>
				<div className='bg-violet-200 p-9 rounded-lg m-5'>
					<h2 className='text-4xl font-bold mb-5'>1. When should you use context API?</h2>
					<p className='text-lg text-gray-600'>
						Context API should be used when we share data or information from one component to another at every level.
						Sometimes using Props to pass any data to any grand component is very difficult or messes up the code. But
						Context API makes it easier and more comfortable.
					</p>
				</div>
				<div className='bg-violet-200 p-9 rounded-lg m-5'>
					<h2 className='text-4xl font-bold mb-5'>2. What is a custom hook?</h2>
					<p className='text-lg text-gray-600'>
						Context API should be used when we share data or information from one component to another at every level.
						Sometimes using Props to pass any data to any grand component is very difficult or messes up the code. But
						Context API makes it easier and more comfortable.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;

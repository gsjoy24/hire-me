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
						A custom hook always starts with 'use' and it's a javascript function. When a similar logic should use in
						two or more components, we can use custom hooks. It reduces our code by reusing the function or logic.
					</p>
				</div>
				<div className='bg-violet-200 p-9 rounded-lg m-5'>
					<h2 className='text-4xl font-bold mb-5'>3. What is useRef?</h2>
					<p className='text-lg text-gray-600'>
						useRef is a React hook and returns an object of a single property named current. The value of the current
						property is the parameter that the hook takes when it is declared. It helps to reduce the number of web page
						renderings.
					</p>
				</div>
				<div className='bg-violet-200 p-9 rounded-lg m-5'>
					<h2 className='text-4xl font-bold mb-5'>4. What is useMemo?</h2>
					<p className='text-lg text-gray-600'>
						The useMemo hook is a function that returns a memoized value. The function only runs when one of its
						dependencies is updated. It helps to optimize the performance of a react app.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;

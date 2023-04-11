import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch('categories.json')
			.then((data) => data.json())
			.then((data) => setCategories(data));
	}, []);

	return (
		<div className='py-24 p-6 md:px-12 '>
			<div className=' mb-12 text-center'>
				<h1 className='text-3xl md:text-5xl font-bold mb-6'>Job Category List</h1>
				<p className='text-sm text-gray-500'>
					Explore thousands of job opportunities with all the information you need. Its your future
				</p>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
				{categories.map((category) => (
					<CategoryCard key={category.id} category={category}></CategoryCard>
				))}
			</div>
		</div>
	);
};

export default Category;

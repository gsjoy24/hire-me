import React from 'react';

const CategoryCard = ({ category }) => {
	const { icon, categoryTitle, jobsAvailable } = category;
	return (
		<div className='card min-w-[280px] max-w-xs bg-gray-100 shadow-md m-auto'>
			<figure className='px-10 pt-10'>
				<img src={icon} alt='Shoes' className='rounded-xl w-14' />
			</figure>
			<div className='card-body items-center'>
				<h2 className='card-title text-gray-700 font-bold'>{categoryTitle}</h2>
				<p className='text-gray-400'>{jobsAvailable} Jobs Available</p>
			</div>
		</div>
	);
};

export default CategoryCard;

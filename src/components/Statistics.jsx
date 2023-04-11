import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import SectionTitle from './SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faUserAlt } from '@fortawesome/free-solid-svg-icons';
const data = [
	{
		name: 'Assignment 1',
		marks: 60
	},
	{
		name: 'Assignment 2',
		marks: 60
	},
	{
		name: 'Assignment 3',
		marks: 60
	},
	{
		name: 'Assignment 4',
		marks: 59
	},
	{
		name: 'Assignment 5',
		marks: 60
	},
	{
		name: 'Assignment 6',
		marks: 60
	},
	{
		name: 'Assignment 7',
		marks: 60
	},
	{
		name: 'Assignment 8',
		marks: 60
	}
];
const Statistics = () => {
	return (
		<div>
			<SectionTitle>Statistics</SectionTitle>
			<div className='flex justify-center mb-8'>
				<div className='px-5 md:px-12 mt-12 ml-0 md:ml-8 '>
					<h3 className='text-4xl font-bold'>
						<FontAwesomeIcon className='mr-3' icon={faUserAlt}></FontAwesomeIcon> Gour Saha Joy
					</h3>

					<p className='text-gray-500 ml-16 my-3  text-xl'>Batch 7, Web Development</p>
					<p className='text-gray-500 text-xl'>
						<span className='font-bold text-gray-900 '>Average Mark:</span> 59.88
					</p>
					<p className='text-gray-500 text-xl'>
						<span className='font-bold text-gray-900 '>Leader Board Position:</span> 186
					</p>
				</div>
			</div>
			<div className='m-auto  pb-16'>
				<div className='overflow-scroll lg:overflow-hidden flex lg:justify-center'>
					<AreaChart width={1000} height={400} data={data}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Area type='monotone' dataKey='marks' stroke='#8884d8' fill='#8884d8' />
					</AreaChart>
				</div>
				<p className='text-2xl font-bold text-center my-6'>
					<FontAwesomeIcon className='mr-5' icon={faArrowUp} /> Assignment Marks
				</p>
			</div>
		</div>
	);
};

export default Statistics;

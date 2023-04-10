import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import SectionTitle from './SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
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
	}
];
const Statistics = () => {
	return (
		<div>
			<SectionTitle>Statistics</SectionTitle>
			<div className='m-auto overflow-scroll lg:overflow-hidden'>
				<AreaChart
					width={1000}
					height={400}
					data={data}
					margin={{
						top: 30,
						right: 30,
						left: 30
					}}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Area type='monotone' dataKey='marks' stroke='#8884d8' fill='#8884d8' />
				</AreaChart>
			</div>
			<div className='px-5 md:px-12 mt-12'>
				<h3 className='text-2xl font-bold'>
					<FontAwesomeIcon className='mr-3' icon={faUserAlt}></FontAwesomeIcon> Gour Saha Joy
				</h3>
				<p></p>
			</div>
		</div>
	);
};

export default Statistics;

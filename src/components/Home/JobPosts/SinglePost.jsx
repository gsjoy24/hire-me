import { faHandHoldingDollar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = ({ jobPost }) => {
	const { id, company_logo, job_title, company_name, remote_or_onsite, full_time_or_part_time, location, salary } =
		jobPost;
	return (
		<div className='border border-gray-300 shadow-lg rounded-md p-5 max-w-lg '>
			<img className='w-44 mb-7' src={company_logo} alt={company_name} />
			<h2 className='text-xl font-bold mb-3'>{job_title}</h2>
			<p className='text-lg text-gray-500 font-semibold'>{company_name}</p>
			<div className='flex gap-5 mt-4'>
				<p className='text-violet-500 px-4 py-2 border border-violet-600 rounded-lg text-sm font-bold'>
					{remote_or_onsite}
				</p>
				<p className='text-violet-500 px-4 py-2 border border-violet-600 rounded-lg text-sm font-bold'>
					{full_time_or_part_time}
				</p>
			</div>

			<div className='md:flex gap-4 text-gray-500 mt-5'>
				<p>
					<FontAwesomeIcon className='mr-2' icon={faLocationDot}></FontAwesomeIcon> {location}
				</p>
				<p>
					<FontAwesomeIcon className='mr-2' icon={faHandHoldingDollar}></FontAwesomeIcon>Salary: {salary}
				</p>
			</div>
			<Link to={`/job/${id}`}>
				<button className='btn bg-gradient-to-r from-sky-400 to-violet-600 border-0 mt-7'>View Detail</button>
			</Link>
		</div>
	);
};

export default SinglePost;

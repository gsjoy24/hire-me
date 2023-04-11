import { faHandHoldingDollar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = ({ jobPost }) => {
	const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, fulltimeOrPartTime, location, salary } = jobPost;
	return (
		<div className='border border-gray-300 shadow-lg rounded-md p-5 max-w-lg'>
			<img className='w-44 mb-7' src={companyLogo} alt='' />
			<h2 className='text-xl font-bold mb-3'>{jobTitle}</h2>
			<p className='text-lg text-gray-500 font-semibold'>{companyName}</p>
			<div className='flex gap-5 mt-4'>
				<p className='text-violet-500 px-4 py-2 border border-violet-600 rounded-lg text-sm font-bold'>
					{remoteOrOnsite}
				</p>
				<p className='text-violet-500 px-4 py-2 border border-violet-600 rounded-lg text-sm font-bold'>
					{fulltimeOrPartTime}
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

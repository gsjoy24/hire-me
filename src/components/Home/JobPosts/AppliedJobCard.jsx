import { faHandHoldingDollar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobCard = ({ job }) => {
	const { id, job_title, company_logo, company_name, location, salary, full_time_or_part_time, remote_or_onsite } = job;
	return (
		<div className='card sm:card-side shadow-xl mx-auto mb-5 border border-gray-300'>
			<figure className=' bg-gray-200 m-5 min-h-[150px]'>
				<img className='w-44 p-5 ' src={company_logo} alt={company_name} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{job_title}</h2>
				<p className='text-gray-500'>{company_name}</p>
				<div className='flex gap-5 mt-2 w-48'>
					<p className='text-violet-500 px-4 py-2 border border-violet-600 rounded-lg text-xs font-bold flex justify-center items-center'>
						{remote_or_onsite}
					</p>
					<p className='text-violet-500 px-4 py-2 border border-violet-600 rounded-lg text-xs font-bold flex justify-center items-center'>
						{full_time_or_part_time}
					</p>
				</div>
				<div className='md:flex gap-4 text-gray-500 mt-5 max-w-[380px]'>
					<p>
						<FontAwesomeIcon className='mr-2' icon={faLocationDot}></FontAwesomeIcon> {location}
					</p>
					<p>
						<FontAwesomeIcon className='mr-2' icon={faHandHoldingDollar}></FontAwesomeIcon>Salary: {salary}
					</p>
				</div>
				<div className='card-actions justify-end mt-5'>
					<Link to={`/job/${id}`}>
						<button className='btn btn-primary'>See Detail</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AppliedJobCard;

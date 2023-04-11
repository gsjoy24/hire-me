import { faHandHoldingDollar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobCard = ({ job }) => {
	const { id, jobTitle, companyLogo, companyName, location, salary, fulltimeOrPartTime, remoteOrOnsite } = job;
	return (
		<div className='card sm:card-side bg-base-100 shadow-xl max-w-2xl mx-auto mb-5 '>
			<figure>
				<img className='w-36 p-5' src={companyLogo} alt={companyName} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{jobTitle}</h2>
				<p className='text-gray-500'>{companyName}</p>
				<div className='flex gap-5 mt-2 w-48'>
					<p className='text-violet-500 px-4 py-2 border border-violet-600 rounded-lg text-xs font-bold flex justify-center items-center'>
						{remoteOrOnsite}
					</p>
					<p className='text-violet-500 px-4 py-2 border border-violet-600 rounded-lg text-xs font-bold flex justify-center items-center'>
						{fulltimeOrPartTime}
					</p>
				</div>
				<div className='md:flex gap-4 text-gray-500 mt-5 max-w-[360px]'>
					<p>
						<FontAwesomeIcon className='mr-2' icon={faLocationDot}></FontAwesomeIcon> {location}
					</p>
					<p>
						<FontAwesomeIcon className='mr-2' icon={faHandHoldingDollar}></FontAwesomeIcon>Salary: {salary}
					</p>
				</div>
				<div className='card-actions justify-end flex-col-reverse sm:flex-row mt-5'>
						<button className='btn btn-primary'>cancel application</button>
					<Link to={`/job/${id}`}>
						<button className='btn btn-primary'>See Detail</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AppliedJobCard;

import React from 'react';

const AppliedJobCard = ({ job }) => {
	const { jobTitle, companyLogo, companyName, location, salary, fulltimeOrPartTime, remoteOrOnsite } = job;
	return (
		<div className='card card-side bg-base-100 shadow-xl max-w-2xl mx-auto mb-5'>
			<figure>
				<img className='w-36 p-5' src={companyLogo} alt={companyName} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>New movie is released!</h2>
				<p className='text-gray-500'>{companyName}</p>
				<div className='flex gap-5 mt-4 w-52'>
					<p className='text-violet-500 px-4 py-2 border border-violet-600 rounded-lg text-sm font-bold'>
						{remoteOrOnsite}
					</p>
					<p className='text-violet-500 px-4 py-2 border border-violet-600 rounded-lg text-sm font-bold'>
						{fulltimeOrPartTime}
					</p>
				</div>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary'>Watch</button>
				</div>
			</div>
		</div>
	);
};

export default AppliedJobCard;

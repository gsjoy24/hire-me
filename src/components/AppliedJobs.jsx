import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { appliedJobs } from '../fakeDB';
import AppliedJobCard from './Home/JobPosts/AppliedJobCard';
import SectionTitle from './SectionTitle';

const AppliedJobs = () => {
	const jobs = [];
	const jobPosts = useLoaderData();
	const appliedJobsInDB = appliedJobs();
	for (const id in appliedJobsInDB) {
		const foundAppliedJob = jobPosts.find((job) => job.id === id);
		if (foundAppliedJob) {
			jobs.push(foundAppliedJob);
		}
	}
	const handleFilter = (event) => {
		console.log(event.target.value);
	};
	return (
		<div>
			<SectionTitle>Applied Jobs</SectionTitle>
			<div className='my-14 max-w-2xl mx-5 md:mx-auto'>
				<select
					onChange={handleFilter}
					defaultValue='default'
					className='select w-full max-w-[200px] text-xl ml-auto block bg-gray-200 mb-6 '>
					<option value='default' disabled>
						Filter
					</option>
					<option value='remote'>Remote</option>
					<option value='onsite'>Onsite</option>
				</select>
				{jobs.map((job) => (
					<AppliedJobCard key={job.id} job={job} />
				))}
			</div>
		</div>
	);
};

export default AppliedJobs;

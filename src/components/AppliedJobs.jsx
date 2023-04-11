import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { appliedJobs } from '../fakeDB';
import AppliedJobCard from './Home/JobPosts/AppliedJobCard';
import SectionTitle from './SectionTitle';

const AppliedJobs = () => {
	const foundedAppliedJobs = [];
	const [jobs, setJobs] = useState(foundedAppliedJobs);
	const jobPosts = useLoaderData();
	const appliedJobsInDB = appliedJobs();

	for (const id in appliedJobsInDB) {
		const findingAppliedJob = jobPosts.find((job) => job.id === id);
		if (findingAppliedJob) {
			foundedAppliedJobs.push(findingAppliedJob);
		}
	}
	const handleFilter = (event) => {
		const filteredJobs = [];
		// console.log(event.target.value);
		for (const job of foundedAppliedJobs) {
			if (job.remoteOrOnsite === event.target.value) {
				filteredJobs.push(job);
			}
		}

		setJobs(filteredJobs);
	};
	console.log(foundedAppliedJobs);
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
					<option value='Onsite'>Show All</option>
					<option value='Remote'>Remote</option>
					<option value='Onsite'>Onsite</option>
				</select>
				{jobs.map((job) => (
					<AppliedJobCard key={job.id} job={job} />
				))}
			</div>
		</div>
	);
};

export default AppliedJobs;

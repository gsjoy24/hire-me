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
	return (
		<div>
			<SectionTitle>Applied Jobs</SectionTitle>
			<div className='my-14'>
				{jobs.map((job) => (
					<AppliedJobCard key={job.id} job={job} />
				))}
			</div>
		</div>
	);
};

export default AppliedJobs;

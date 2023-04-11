import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { appliedJobs } from '../fakeDB';
import AppliedJobCard from './Home/JobPosts/AppliedJobCard';
import SectionTitle from './SectionTitle';

const AppliedJobs = () => {
	// founded jobs from the local storage.
	const foundedAppliedJobs = [];

	const [jobs, setJobs] = useState(foundedAppliedJobs);

	// data from the json file.
	const jobPosts = useLoaderData();

	// id's of jobs from the local storage
	const appliedJobsInDB = appliedJobs();

	// pushing the jobs to foundedAppliedJobs.
	for (const id in appliedJobsInDB) {
		const findingAppliedJob = jobPosts.find((job) => job.id === id);
		if (findingAppliedJob) {
			foundedAppliedJobs.push(findingAppliedJob);
		}
	}

	// handling the filtering feature
	const handleFilter = (event) => {
		// initial filtered data
		const filteredJobs = [];

		for (const job of foundedAppliedJobs) {
			if (event.target.value === job.remote_or_onsite) {
				filteredJobs.push(job);
			} else if (event.target.value === 'show-all') {
				filteredJobs.push(job);
			}
		}

		// setting the filtered jobs to the main variable to show them in the UI
		setJobs(filteredJobs);
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
					<option value='show-all'>Show All</option>
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

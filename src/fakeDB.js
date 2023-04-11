const appliedJobs = () => {
	let jobs = {};
	const jobsInLocalStorage = localStorage.getItem('jobs');
	if (jobsInLocalStorage) {
		jobs = JSON.parse(jobsInLocalStorage);
	}
	return jobs;
};

const applyForJob = (id) => {
	const appliedJob = appliedJobs();
	appliedJob[id] = true;
	localStorage.setItem('jobs', JSON.stringify(appliedJob));
	console.log(appliedJob);
};
export { appliedJobs, applyForJob };

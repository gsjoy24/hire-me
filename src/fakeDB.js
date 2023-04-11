const appliedJobs = () => {
	let jobs = {};
	const jobsInLocalStorage = localStorage.getItem('jobs');
	if (jobsInLocalStorage) {
		jobs = JSON.parse(jobsInLocalStorage);
	}
	return jobs;
};

const applyForJob = (id) => {
	const appliedJobInDB = appliedJobs();
	appliedJobInDB[id] = true;
	localStorage.setItem('jobs', JSON.stringify(appliedJobInDB));
};


export { appliedJobs, applyForJob };

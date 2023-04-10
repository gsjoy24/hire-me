const loadJobPosts = async () => {
	const jobs = await fetch('jobs.json');
	const jobsPosts = await jobs.json();
	return jobsPosts;
};

const loadJobDetail = () => {
	const jobsPosts = loadJobPosts();
};

export { loadJobPosts };

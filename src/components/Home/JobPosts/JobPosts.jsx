import React, { useState } from 'react';
import SinglePost from './SinglePost';

const JobPosts = ({ jobPosts }) => {
	const [showAll, setShowALl] = useState(false);

	return (
		<div className='my-8'>
			<div className=' mb-12 text-center'>
				<h1 className='text-3xl md:text-5xl font-bold mb-6'>Featured Jobs</h1>
				<p className='text-sm text-gray-500'>
					Explore thousands of job opportunities with all the information you need. Its your future
				</p>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 max-w-[1000px] m-3 md:m-auto gap-5'>
				{jobPosts.slice(0, showAll ? 12 : 4).map((jobPost) => (
					<SinglePost key={jobPost.id} jobPost={jobPost}></SinglePost>
				))}
			</div>
			<div className='mt-12'>
				{showAll ? (
					<button className='btn btn-primary mt-7 m-auto block' onClick={() => setShowALl(!showAll)}>
						show less
					</button>
				) : (
					<button className='btn btn-primary  mt-7 m-auto block' onClick={() => setShowALl(!showAll)}>
						show all
					</button>
				)}
			</div>
		</div>
	);
};

export default JobPosts;

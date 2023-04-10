import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SectionTitle from '../../SectionTitle';

const JobDetail = () => {
	const jobPosts = useLoaderData();
	const { id } = useParams();

	const foundPost = jobPosts.find((post) => post.id === id);
	const {
		jobTitle,
		location,
		salary,
		jobDescription,
		jobResponsibility,
		educationalRequirements,
		experiences,
		contactInformation
	} = foundPost;

	return (
		<div>
			<SectionTitle>Job Details</SectionTitle>
			<div className='py-24'>
				<div>
					<p className='mb-5'>
						<span className='font-bold'>Job Description: </span>
						{jobDescription}
					</p>
					<p className='mb-5'>
						<span className='font-bold'>Job Responsibility: </span>
						{jobResponsibility}
					</p>
					<p className='mb-3'>
						<span className='font-bold'>Educational Requirements: </span> <br />
						{educationalRequirements}
					</p>
					<p className='mb-5'>
						<span className='font-bold'>Experiences: </span> <br />
						{experiences}
					</p>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default JobDetail;

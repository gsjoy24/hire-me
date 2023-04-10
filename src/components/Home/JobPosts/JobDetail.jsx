import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SectionTitle from '../../SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEnvelopeCircleCheck,
	faHandHoldingDollar,
	faLocationDot,
	faPersonMilitaryPointing,
	faPhone
} from '@fortawesome/free-solid-svg-icons';

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
			<div className='py-24 max-w-[1000px] grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto'>
				{/* left side */}
				<div className='p-5'>
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

				{/* right side */}
				<div className='max-w-[340px] m-auto'>
					<div className='p-8 bg-gradient-to-tr from-violet-200 to-sky-100 rounded-lg'>
						<div className='pb-5'>
							<h3 className='font-bold text-xl border-b border-gray-400 pb-3 mb-3'>Job Derails</h3>

							<p className='mb-3'>
								<FontAwesomeIcon className='mr-2 text-violet-500' icon={faHandHoldingDollar} />
								<span className='font-semibold'>Salary :</span>
								<span className='text-gray-600'> {salary}</span>
							</p>
							<p>
								<FontAwesomeIcon className='mr-2 text-violet-500' icon={faPersonMilitaryPointing} />
								<span className='font-semibold'>Job Title :</span>
								<span className='text-gray-600'> {jobTitle}</span>
							</p>
						</div>
						<div>
							<h3 className='font-bold text-xl border-b border-gray-400 pb-3 mb-3'>Contact Information</h3>
							<p className='mb-3'>
								<FontAwesomeIcon className='mr-2 text-violet-500' icon={faPhone} />
								<span className='font-semibold'>Phone :</span>
								<span className='text-gray-600'> {contactInformation.phone}</span>
							</p>
							<p className='mb-3'>
								<FontAwesomeIcon className='mr-2 text-violet-500' icon={faEnvelopeCircleCheck} />
								<span className='font-semibold'>Email :</span>
								<span className='text-gray-600'> {contactInformation.email}</span>
							</p>
							<p>
								<FontAwesomeIcon className='mr-2 text-violet-500' icon={faLocationDot} />
								<span className='font-semibold'>Address :</span>
								<span className='text-gray-600'> {location}</span>
							</p>
						</div>
					</div>
					<button className='btn w-full mt-4 bg-gradient-to-r from-violet-500 to-sky-500 border-0'>Apply Now</button>
				</div>
			</div>
		</div>
	);
};

export default JobDetail;

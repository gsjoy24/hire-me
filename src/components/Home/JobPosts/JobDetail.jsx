import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetail = () => {
   const jobDetail = useLoaderData();
   console.log(jobDetail);
	return (
		<div>
			<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos labore porro similique neque magnam facilis dolor nisi atque quia eligendi vitae fuga beatae id molestiae in, ullam a tenetur repellendus?</h1>
		</div>
	);
};

export default JobDetail;

import React from 'react';
import Hero from './Hero';
import Category from './Category/Category';
import { useLoaderData } from 'react-router-dom';
import JobPosts from './JobPosts/JobPosts';

const Home = () => {
	const jobPosts = useLoaderData();
	return (
		<>
			<Hero></Hero>
			<Category></Category>
			<JobPosts jobPosts={jobPosts}></JobPosts>
		</>
	);
};

export default Home;

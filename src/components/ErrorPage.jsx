import React from 'react';
import Header from './Header';
import { useRouteError } from 'react-router-dom';
import Footer from './Footer';

const ErrorPage = () => {
	const error = useRouteError();
	console.log(error);
	return (
		<>
			<Header></Header>
			<div className='min-h-[calc(100vh-60px)] flex justify-center items-center'>
				<img className='max-w-fit max-h-[calc(100vh-70px)]' src='404.svg' alt='404 error' />
			</div>
			<Footer></Footer>
		</>
	);
};

export default ErrorPage;

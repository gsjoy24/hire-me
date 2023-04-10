import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Blog from './components/Blog';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Home from './components/Home/Home';
import JobDetail from './components/Home/JobPosts/JobDetail';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => fetch('/jobs.json')
			},
			{
				path: '/job/:id',
				element: <JobDetail />,
				loader: ({params}) => fetch('/jobs.json')
			},
			{
				path: '/statistics',
				element: <Statistics />
			},
			{
				path: '/applied_jobs',
				element: <AppliedJobs />
			},
			{
				path: '/blog',
				element: <Blog />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);

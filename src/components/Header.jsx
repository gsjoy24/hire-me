import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className='navbar bg-base-100 px-12 sticky top-0 z-50 shadow-md shadow-violet-300'>
			<div className='navbar-start w-full lg:w-1/2 justify-between'>
				<Link to='/'>
					<span className='btn btn-ghost normal-case text-xl md:text-3xl font-bold'>
						Hire <span className='text-violet-700'>ME</span>
					</span>
				</Link>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 -right-1'>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/statistics'>Statistics</NavLink>
						</li>
						<li>
							<NavLink to='/applied_jobs'>Applied Jobs</NavLink>
						</li>
						<li>
							<NavLink to='/blog'>Blog</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1 flex gap-3'>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/statistics'>Statistics</NavLink>
					</li>
					<li tabIndex={0}>
						<NavLink to='/applied_jobs'>Applied Jobs</NavLink>
					</li>
					<li>
						<NavLink to='/blog'>Blog</NavLink>
					</li>
				</ul>
			</div>
			<div className='navbar-end hidden lg:inline-flex'>
				<a className='btn bg-gradient-to-r from-sky-400 to-violet-500 border-none shadow-lg'>Start Applying</a>
			</div>
		</div>
	);
};

export default Header;

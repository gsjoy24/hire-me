import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
	return (
		<footer className='footer p-14 bg-gray-900 text-white'>
			<div className='max-w-[290px]'>
				<p className='text-4xl font-bold'>HireMe</p>
				<p>
					There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
				</p>
				<div className='flex gap-3 mt-3'>
					<a href='https://facebook.com/'>
						<FontAwesomeIcon
							className='text-2xl p-2 rounded-full bg-white text-blue-600 cursor-pointer hover:scale-125 duration-300'
							icon={faFacebook}
						/>
					</a>
					<a href='https://twitter.com/'>
						<FontAwesomeIcon
							className='text-2xl p-2 rounded-full bg-white text-sky-400 cursor-pointer hover:scale-125 duration-300'
							icon={faTwitter}
						/>
					</a>
					<a href='https://www.instagram.com/'>
						<FontAwesomeIcon
							className='text-2xl p-2 rounded-full bg-white text-pink-600 cursor-pointer hover:scale-125 duration-300'
							icon={faInstagram}
						/>
					</a>
				</div>
			</div>
			<div>
				<span className='footer-title'>Services</span>
				<a className='link link-hover'>Branding</a>
				<a className='link link-hover'>Design</a>
				<a className='link link-hover'>Marketing</a>
				<a className='link link-hover'>Advertisement</a>
			</div>
			<div>
				<span className='footer-title'>Services</span>
				<a className='link link-hover'>Branding</a>
				<a className='link link-hover'>Design</a>
				<a className='link link-hover'>Marketing</a>
				<a className='link link-hover'>Advertisement</a>
			</div>
			<div>
				<span className='footer-title'>Company</span>
				<a className='link link-hover'>About us</a>
				<a className='link link-hover'>Contact</a>
				<a className='link link-hover'>Jobs</a>
				<a className='link link-hover'>Press kit</a>
			</div>
			<div>
				<span className='footer-title'>Legal</span>
				<a className='link link-hover'>Terms of use</a>
				<a className='link link-hover'>Privacy policy</a>
				<a className='link link-hover'>Cookie policy</a>
			</div>
		</footer>
	);
};

export default Footer;

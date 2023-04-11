import React from 'react';

const Hero = () => {
	return (
		<div className='hero py-12 bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<img src='hero.svg' className='w-80 sm:w-[450px] rounded-3xl ' />
				<div>
					<h1 className='text-5xl md:text-7xl font-bold'>
						<span>One Step</span> <br /> <span>Closer To Your</span> <br />{' '}
						<span className='text-violet-500'>Dream Job</span>
					</h1>
					<p className='py-6 max-w-md'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
						deleniti eaque aut repudiandae et a id nisi.
					</p>
					<button className='btn bg-gradient-to-r  from-sky-400 to-violet-500 border-none animate-bounce'>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;

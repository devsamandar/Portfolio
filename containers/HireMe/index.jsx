import Link from 'next/link';

const HireMe = () => {
	return (
		<section
			className='py-20 w-full table relative'
			data-jarallax='{"speed": 0.5}'
			style={{ background: 'url("assets/images/personal/cta.jpg") center' }}
		>
			<div className='absolute inset-0 bg-slate-900/70' />
			<div className='container relative'>
				<div className='grid grid-cols-1 pb-8 text-center'>
					<h3 className='mb-4 md:text-3xl text-2xl text-white font-medium'>
						I Am Available For Freelancer Projects.
					</h3>
					<p className='text-white/80 max-w-xl mx-auto'>
						Obviously I'm a Web Designer. Experienced with all stages of the
						development cycle for dynamic web projects.
					</p>
					<div className='relative mt-8'>
						<Link href='/contacts#contact-form'>
							<a className='btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md'>
								Hire Me
							</a>
						</Link>
					</div>
				</div>
				{/*end grid*/}
			</div>
			{/*end container*/}
		</section>
	);
};

export default HireMe;

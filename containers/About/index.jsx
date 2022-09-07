const About = () => {
	return (
		<div className='container'>
			<div className='grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]'>
				<div className='lg:col-span-5 md:col-span-6'>
					<div className=''>
						<img
							src='assets/images/personal/hero.jpg'
							className='rounded-full'
							alt=''
						/>
					</div>
				</div>
				<div className='lg:col-span-7 md:col-span-6 mt-8 md:mt-0'>
					<div className='lg:ml-5'>
						<h6 className='text-indigo-600 text-sm font-bold uppercase mb-2'>
							About us
						</h6>
						<h3 className='mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold'>
							Better Design <br />
							Better Experience
						</h3>
						<p className='text-slate-400 max-w-xl'>
							Obviously I'm a Web Designer. Experienced with all stages of the
							development cycle for dynamic web projects.
						</p>
						<div className='mt-4'>
							<div className='flex justify-between mb-2'>
								<span className='text-slate-400'>React</span>
								<span className='text-slate-400'>84%</span>
							</div>
							<div className='w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]'>
								<div
									className='bg-indigo-600 h-[6px] rounded-full'
									style={{ width: '84%' }}
								/>
							</div>
						</div>
						<div className='mt-4'>
							<div className='flex justify-between mb-2'>
								<span className='text-slate-400'>JavaScript</span>
								<span className='text-slate-400'>90%</span>
							</div>
							<div className='w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]'>
								<div
									className='bg-indigo-600 h-[6px] rounded-full'
									style={{ width: '90%' }}
								/>
							</div>
						</div>
						<div className='mt-4'>
							<div className='flex justify-between mb-2'>
								<span className='text-slate-400'>HTML</span>
								<span className='text-slate-400'>95%</span>
							</div>
							<div className='w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]'>
								<div
									className='bg-indigo-600 h-[6px] rounded-full'
									style={{ width: '95%' }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*grid*/}
		</div>
	);
};

export default About;

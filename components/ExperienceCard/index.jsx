const ExperienceCard = ({ isEven, item }) => {
	return (
		<div
			className={` ml-8 md:ml-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:right-0 md:after:left-0 after:-left-9 before:content-[''] before:absolute md:before:mx-auto md:before:right-0 md:before:left-0 before:-left-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900 ${
				!isEven ? 'mt-12' : ''
			}`}>
			<div className='grid md:grid-cols-2'>
				<div
					className={`md:mr-8 relative ${
						!isEven ? ' md:ml-8 text-left md:order-2' : 'md:text-right'
					}`}>
					<img
						src={item.companyLogo}
						className={`rounded-full h-9 w-9 ${isEven ? 'md:ml-auto' : ''}`}
						alt=''
					/>
					<h5 className='my-2 font-semibold text-lg'>{item.companyName}</h5>
					<h6 className='text-slate text-sm mb-0'>{item.period}</h6>
				</div>
				<div
					className={
						!isEven
							? 'float-left md:text-right md:mr-8 mt-6 md:mt-0 md:order-1'
							: 'float-left text-left md:ml-8 mt-6 md:mt-0'
					}>
					<h5 className='title mb-1 font-semibold'>{item.position}</h5>
					<p className='mt-3 mb-0 text-slate-400'>{item.description}</p>
				</div>
			</div>
		</div>
	)
}

export default ExperienceCard

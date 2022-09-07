import Link from 'next/link'
const PortfolioCard = ({ item }) => {
	return (
		<div className='group  relative  overflow-hidden rounded-md transition-all duration-500'>
			<img
				src={item.images[0]}
				className='group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500'
				alt=''
			/>
			<div className='absolute inset-0 group-hover:bg-dark opacity-50 transition duration-500 z-0' />
			<div className='content'>
				<div className='icon absolute z-10 hidden group-hover:block top-4 right-4 transition-all duration-500'>
					<a
						href='assets/images/portfolio/1.jpg'
						className='btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white btn-icon rounded-full lightbox'>
						<i className='uil uil-camera' />
					</a>
				</div>
				<div className='title absolute z-10 hidden group-hover:block bottom-4 left-4'>
					<Link href={`/portfolios/${item.id}`}>
						<a className='h6 text-md font-medium text-white hover:text-indigo-600 duration-500 ease-in-out'>
							{item.title}
						</a>
					</Link>
					<p className='text-slate-100 tag mb-0'>{item.category}</p>
				</div>
			</div>
		</div>
	)
}

export default PortfolioCard

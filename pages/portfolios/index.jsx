import Breadcrumb from 'components/Breadcrumb';
import bg from 'public/assets/images/portfolio/bg-inner.jpg';
import data from 'data/portfolio.data';
import PortfolioCard from 'components/PortfolioCard';
import { useEffect, useState } from 'react';
const Portfolios = () => {
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);

	useEffect(() => {
		const sorted = [...new Set(data.map((item) => item.category))];
		setCategories(sorted);
	}, []);
	return (
		<>
			<Breadcrumb bgImage={bg.src} title={'My Portfolios'} />
			<div className='relative'>
				<div className='shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900'>
					<svg
						className='w-full h-auto'
						viewBox='0 0 2880 48'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z'
							fill='currentColor'
						/>
					</svg>
				</div>
			</div>
			<section className='relative md:pt-24 pt-16 mb-20 '>
				<div className='container'>
					<div className='grid grid-cols-1 items-center gap-[30px]'>
						<div className='filters-group-wrap text-center'>
							<div className='filters-group'>
								<ul className='mb-0 list-none container-creative filter-options'>
									<li
										className={`inline-block font-medium text-base mx-1.5 mb-3 hover:border-b-2 border-blue-700
										 text-slate-400 cursor-pointer relative transition duration-500
										 ${!selectedCategory ? 'border-b-2 ' : ''}
										  `}
										data-group='all'
										onClick={() => setSelectedCategory(null)}
									>
										All
									</li>
									{categories.map((category, index) => (
										<li
											onClick={() => setSelectedCategory(category)}
											key={index}
											className={`inline-block font-medium text-base mx-1.5 mb-3 hover:border-b-2 border-blue-700
											 text-slate-400 cursor-pointer relative transition duration-500
												${selectedCategory === category ? 'border-b-2 ' : ''}
											 `}
											data-group='branding'
										>
											{category}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className='grid grid-cols-3 mt-4 gap-4'>
						{data
							.filter((item) =>
								!selectedCategory ? item : item.category === selectedCategory
							)
							.map((item, index) => (
								<PortfolioCard key={index} item={item} />
							))}
					</div>
				</div>
				{/*end container*/}
			</section>
		</>
	);
};

export default Portfolios;

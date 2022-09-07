import Head from 'next/head';
import bg from 'public/assets/images/portfolio/bg-inner.jpg';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import portfolioData from 'data/portfolio.data';
import Link from 'next/link';
import Breadcrumb from 'components/Breadcrumb';
const PortfolioPage = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const [portfolio, setPortfolio] = useState({});

	const getDate = async (id) => {
		const res = portfolioData.find((item) => item.id == id);
		console.log('res', id, res);
		setPortfolio(res);
		setLoading(false);
	};
	useEffect(() => {
		if (router.isReady) {
			getDate(router.query.portfolio_id);
		}
	}, [router.isReady]);

	if (loading && !portfolio) {
		return null;
	}
	return (
		<>
			<div>
				<Breadcrumb bgImage={bg.src} title={portfolio.category} />
				{/*end section*/}
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
				{/* End Hero */}
				{/* Start Section*/}
				<section className='relative md:py-24 py-16'>
					<div className='container'>
						<div className='grid md:grid-cols-12 grid-cols-1 gap-[30px]'>
							<div className='lg:col-span-5 md:col-span-6'>
								<div className='grid grid-cols-1 gap-[30px]'>
									{portfolio.images?.map((item, index) => (
										<img
											key={index}
											src={`/${item}`}
											className='rounded-md'
											alt=''
										/>
									))}
								</div>
								{/*end grid*/}
							</div>
							{/*end col*/}
							<div className='lg:col-span-7 md:col-span-6'>
								<div className='sticky top-20'>
									<div className='grid lg:grid-cols-12 grid-cols-1 gap-[30px]'>
										<div className='lg:col-span-12'>
											<div className='work-details'>
												<h4 className='text-xl font-semibold mb-3 border-b border-gray-100 dark:border-gray-700 pb-3'>
													Project Name :
													<span className='ml-2'>{portfolio.title}</span>
												</h4>
												<p className='text-slate-400'>
													{portfolio.description}
												</p>
											</div>
										</div>
										{/*end col*/}
										<div className='lg:col-span-7'>
											<div className='bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-md'>
												<h5 className='text-lg font-semibold border-b border-gray-100 dark:border-gray-700 pb-3 mb-3'>
													Project Info :
												</h5>
												<dl className='grid grid-cols-12 mb-0'>
													<dt className='md:col-span-4 col-span-5 mt-2'>
														Client :
													</dt>
													<dd className='md:col-span-8 col-span-7 mt-2 text-slate-400'>
														{portfolio.client}
													</dd>
													<dt className='md:col-span-4 col-span-5 mt-2'>
														Category :
													</dt>
													<dd className='md:col-span-8 col-span-7 mt-2 text-slate-400'>
														{portfolio.category}
													</dd>
													<dt className='md:col-span-4 col-span-5 mt-2'>
														Date :
													</dt>
													<dd className='md:col-span-8 col-span-7 mt-2 text-slate-400'>
														{portfolio.date}
													</dd>
													<dt className='md:col-span-4 col-span-5 mt-2'>
														Website :
													</dt>
													<dd className='md:col-span-8 col-span-7 mt-2 text-slate-400'>
														{portfolio.website}
													</dd>
												</dl>
											</div>
										</div>
										{/*end col*/}
									</div>
									{/*end grid*/}
								</div>
							</div>
							{/*end col*/}
						</div>
						{/*end grid*/}
					</div>
					{/*end container*/}
				</section>
			</div>
		</>
	);
};
export default PortfolioPage;

import Breadcrumb from 'components/Breadcrumb';
import certificateData from 'data/certificate.data';
import { useRouter } from 'next/router';
import bg from 'public/assets/images/portfolio/bg-inner.jpg';
import { useEffect, useState } from 'react';
const CertificateDetails = () => {
	const [certificate, setCertificate] = useState(null);
	const router = useRouter();

	useEffect(() => {
		if (router.isReady) {
			setCertificate(
				certificateData.find((item) => item.id == router.query.certificate_id)
			);
		}
	}, [router.isReady]);
	if (!certificate) return null;

	return (
		<div>
			<Breadcrumb bgImage={bg.src} title={certificate.name} />
			<section className='relative md:py-24 py-16'>
				<div className='container'>
					<div className='grid md:grid-cols-12 grid-cols-1 gap-[30px]'>
						<div className='lg:col-span-8 md:col-span-6'>
							<div className='p-6 rounded-md shadow dark:shadow-gray-800'>
								<img
									src={'/' + certificate.image}
									className='rounded-md object-cover w-full h-[400px] overflow-hidden'
									alt=''
								/>
								<div className='mt-6'>
									<p className='text-slate-400'>{certificate.description}</p>
								</div>
							</div>
						</div>
						<div className='lg:col-span-4 md:col-span-6'>
							<div className='sticky top-20'>
								<h5 className='text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center'>
									Authors
								</h5>
								<div className='text-center mt-8'>
									{certificate.authors.map((item, index) => (
										<p
											key={index}
											className='text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out'
										>
											{item}
										</p>
									))}
								</div>
								<h5 className='text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8'>
									Learned Technologies
								</h5>
								<ul className='list-none text-center mt-8'>
									{certificate.technologies.map((item, index) => (
										<li key={index} className='inline-block m-2'>
											<p className='px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out'>
												{item}
											</p>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CertificateDetails;

import Link from 'next/link';
const CertificateCard = ({ item }) => {
	return (
		<div className='blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden'>
			<img src={item.image} alt='' />
			<div className='content p-6'>
				<p className='title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
					{item.name}
				</p>

				<div className='mt-4'>
					<Link href={`/certificates/${item.id}`}>
						<a className='btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out'>
							Read More <i className='uil uil-arrow-right' />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CertificateCard;

import Breadcrumb from 'components/Breadcrumb';
import CertificateCard from 'components/CertificateCard';
import certificateData from 'data/certificate.data';
import bg from 'public/assets/images/portfolio/bg-inner.jpg';
const Blogs = () => {
	return (
		<div>
			<Breadcrumb bgImage={bg.src} title={'My Certificates'} />
			<div>
				<section className='relative md:py-24 py-16'>
					<div className='container'>
						<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]'>
							{certificateData.map((item, index) => (
								<CertificateCard key={index} item={item} />
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Blogs;

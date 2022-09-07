import CertificateCard from 'components/CertificateCard';
import data from 'data/certificate.data';
import TitleMain from '../../components/TitleMain';
const Certificates = () => {
	return (
		<div className='container md:mt-24 mt-16'>
			<TitleMain top='Certificates' title='Latest Certificates' />
			<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]'>
				{data.map((item, index) => (
					<CertificateCard key={index} item={item} />
				))}
			</div>
		</div>
	);
};

export default Certificates;

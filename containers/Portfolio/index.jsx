import PortfolioCard from 'components/PortfolioCard';
import TitleMain from '../../components/TitleMain';
import data from '../../data/portfolio.data';

const Portfolio = () => {
	return (
		<div className='container'>
			<TitleMain
				top='Portfolio'
				title='	Our Works &amp; Projects'
				text="Obviously I'm a Web Designer. Experienced with all stages of the
					development cycle for dynamic web projects."
			/>

			{/*end grid*/}
			<div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8'>
				{data.map((item, index) => (
					<PortfolioCard key={index} item={item} />
				))}
			</div>
		</div>
	);
};

export default Portfolio;

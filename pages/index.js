import About from 'containers/About';
import Experiences from 'containers/Experiences';
import Hero from 'containers/Hero';
import HireMe from 'containers/HireMe';
import Portfolio from 'containers/Portfolio';
import Services from 'containers/Services';
import TechnologyList from 'containers/TechnologyList';
import Certificates from '/containers/Certificates';

export default function Home() {
	return (
		<>
			<Hero />
			<TechnologyList />
			<section className='relative md:py-24 py-16' id='about'>
				<About />
				<Services />
			</section>
			<Experiences />
			<HireMe />
			<section className='relative md:py-24 py-16' id='portfolio'>
				<Portfolio />
				<Certificates />
			</section>
		</>
	);
}

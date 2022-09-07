import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div className='font-nunito text-base text-black dark:text-white dark:bg-slate-900'>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
				<BackToTop />

				{/* <Switcher /> */}
			</div>
		</>
	);
}

export default MyApp;

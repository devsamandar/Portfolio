import data from 'data/services.data.js';
import TitleMain from '../../components/TitleMain';
const Services = () => {
	return (
		<div className='container md:mt-24 mt-16'>
			<TitleMain
				top='Services'
				title='What do i offer ?'
				text="Obviously I'm a Web Designer. Experienced with all stages of the
					development cycle for dynamic web projects."
			/>

			{/*end grid*/}
			<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]'>
				{data.map((item, index) => (
					<div
						key={index}
						className='p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6'
					>
						<div className='w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800'>
							<i className='uil uil-airplay' />
						</div>
						<div className='content mt-7'>
							<p className='title h5 text-lg font-medium'>{item.title}</p>
							<p className='text-slate-400 mt-3'>{item.text}</p>
						</div>
					</div>
				))}
			</div>
			{/*end grid*/}
		</div>
	);
};

export default Services;

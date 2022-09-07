import data from 'data/experiences.data.js'
import ExperienceCard from '../../components/ExperienceCard'
import TitleMain from '../../components/TitleMain'
const Experiences = () => {
	return (
		<section className='relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800'>
			<div className='container'>
				<TitleMain
					top={'Experience'}
					title={'Work Experience'}
					text={
						"Obviously I'm a Web Designer. Experienced with all stages of the	development cycle for dynamic web projects."
					}
				/>

				{/*end grid*/}
				<div className='grid grid-cols-1 mt-8'>
					<div className="relative after:content-[''] after:absolute after:top-0 md:after:right-0 md:after:left-0 after:w-px after:h-full md:after:m-auto after:border-l-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ml-3 md:ml-0">
						{/*Start content*/}
						{data.map((item, index) => (
							<ExperienceCard
								key={index}
								item={item}
								isEven={index % 2 === 0}
							/>
						))}
					</div>
				</div>
				{/*end grid*/}
			</div>
			{/*end container*/}
		</section>
	)
}

export default Experiences

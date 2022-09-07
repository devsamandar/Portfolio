import data from 'data/technology.data.js'
const TechnologyList = () => {
	console.log(data)
	return (
		<section className='pt-12'>
			<div className='container'>
				<div className='grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]'>
					{data.map((item, index) => (
						<div key={index} className='mx-auto py-4'>
							<img src={item} className='h-6' alt='' />
						</div>
					))}
				</div>
				{/*end grid*/}
			</div>
			{/*end container*/}
		</section>
	)
}
export default TechnologyList

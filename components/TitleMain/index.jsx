const TitleMain = ({ top, title, text }) => {
	return (
		<div className='grid grid-cols-1 pb-8 text-center'>
			<h6 className='text-indigo-600 text-sm font-bold uppercase mb-2'>
				{top}
			</h6>
			<h3 className='mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold'>
				{title}
			</h3>
			<p className='text-slate-400 max-w-xl mx-auto'>{text}</p>
		</div>
	)
}

export default TitleMain

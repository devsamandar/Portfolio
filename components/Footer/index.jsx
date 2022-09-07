const Footer = () => {
	return (
		<footer className='footer bg-dark-footer relative text-gray-200 dark:text-gray-200'>
			<div className='py-[30px] px-0 border-t border-slate-800'>
				<div className='container text-center'>
					<div className='grid md:grid-cols-3 grid-cols-1 items-center'>
						<div className='md:text-left text-center'>
							<a href='#' className='text-[22px] focus:outline-none'>
								<img
									src='assets/images/logo-light.png'
									className='mx-auto md:mr-auto md:ml-0'
									alt=''
								/>
							</a>
						</div>
						<div className='text-center mt-6 md:mt-0'>
							<p className='mb-0'>©Jalol Rakhimov</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;

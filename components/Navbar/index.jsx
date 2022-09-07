import Link from 'next/link';
import { useRouter } from 'next/router';
import LogoDark from 'public/assets/images/logo-dark.png';
import LogoLight from 'public/assets/images/logo-light.png';
import Image from 'next/image';
const Navbar = () => {
	const router = useRouter();
	const navbarLinks = [
		{
			title: 'Home',
			url: '/',
		},
		{
			title: 'Portfolios',
			url: '/portfolios',
		},
		{
			title: 'Certificates',
			url: '/certificates',
		},
		{
			title: 'Contacts',
			url: '/contacts',
		},
	];

	return (
		<nav id='topnav' className='defaultscroll is-sticky'>
			<div className='container'>
				<Link href={'/'}>
					<a className='logo pl-0'>
						<Image
							src={
								router.asPath === '/' || router.asPath.startsWith('/#')
									? LogoDark
									: LogoLight
							}
							className='inline-block '
							alt=''
						/>
					</a>
				</Link>
				{/* End Logo container*/}
				<div className='menu-extras'>
					<div className='menu-item'>
						<a className='navbar-toggle' id='isToggle' onClick='toggleMenu()'>
							<div className='lines'>
								<span />
								<span />
								<span />
							</div>
						</a>
					</div>
				</div>
				<div id='navigation'>
					<ul
						className={`navigation-menu ${
							router.asPath !== '/' ? 'nav-light' : ''
						}`}
					>
						{navbarLinks.map((item, index) => (
							<li key={index}>
								<Link href={item.url}>
									<a className='sub-menu-item'>{item.title}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

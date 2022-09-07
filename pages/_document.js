import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='shortcut icon' href='/assets/images/favicon.ico' />

				<link href='/assets/libs/tobii/css/tobii.min.css' rel='stylesheet' />

				<link
					href='/assets/libs/%40iconscout/unicons/css/line.css'
					type='text/css'
					rel='stylesheet'
				/>
				<link rel='stylesheet' href='/assets/css/icons.min.css' />
			</Head>
			<body>
				<Main />
				<NextScript />
				<Script
					strategy='lazyOnload'
					src='/assets/libs/tobii/js/tobii.min.js'
				></Script>
				<Script
					strategy='lazyOnload'
					src='/assets/libs/jarallax/jarallax.min.js'
				></Script>
				<Script
					strategy='afterInteractive'
					src='/assets/libs/feather-icons/feather.min.js'
				></Script>
				<Script strategy='lazyOnload' src='/assets/js/plugins.init.js'></Script>
				<Script strategy='lazyOnload' src='/assets/js/app.js'></Script>
			</body>
		</Html>
	);
}

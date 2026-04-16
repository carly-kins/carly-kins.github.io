import * as React from 'react';
import Navigation from './nav';
import Footer from './footer';

const Layout = ( { children } ) => {
	return (
		<>
			<Navigation />
			<main id="content">
				{children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;
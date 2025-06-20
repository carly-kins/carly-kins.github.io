import * as React from 'react';
import Navigation from './nav';
import Footer from './footer';

const Layout = ( { children, homepage } ) => {
	return (
		<>
			{!homepage ? <Navigation /> : ''}
			<main>
				{children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;
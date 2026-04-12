import * as React from 'react';
import Navigation from './nav';

const Hero = ( {hero, homepage} ) => {
	return (
		<section className="hero">
			<div className="container">
				{homepage ? <Navigation/> : ''}
				<div className="hero-window window-picture">
					<div className="hero-window-inside">
						<nav className="hero-window-nav">
							<p className='hero-window-heading'>
								<span>Welcome</span>
							</p>
						</nav>
						<div className='hero__image'></div>
						<div className="hero__wrap">
							<h1>{ hero.heading }</h1>
							<p>{ hero.subheading }</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
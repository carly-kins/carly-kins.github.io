import * as React from 'react';

const Hero = ( {hero, notFound} ) => {
	return (
		<section className={notFound ? 'hero hero--404' : 'hero'}>
			<div className="container">
				<div className="hero-window window-picture">
					<div className="hero-window-inside">
						<nav className="hero-window-nav">
							<p className='hero-window-heading'>
								<span>{notFound ? '404' : 'welcome'}</span>
							</p>
						</nav>
						<div className='hero__image'></div>
						<div className="hero__wrap">
							<h1>{ hero.heading }</h1>
							<p dangerouslySetInnerHTML={{ __html: hero.subheading }}></p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
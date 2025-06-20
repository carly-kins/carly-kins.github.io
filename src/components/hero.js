import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Navigation from './nav';

const Hero = ( {hero, homepage} ) => {
	let img = getImage( hero.img?.childImageSharp?.gatsbyImageData );
	return (
		<section className="hero">
			{homepage ? <Navigation/> : ''}
			<div className='crt'></div>
			<div className="hero__wrap">
				<div className='glitch glitch--style-1'>
					{/*TODO: Figure out how to get this effect without needing to import the image 3 times*/}
					<GatsbyImage className='glitch__img' image={img} alt={hero.alt} />
					<GatsbyImage className='glitch__img' aria-hidden='true' image={img} />
					<GatsbyImage className='glitch__img' aria-hidden='true' image={img} />
				</div>
				
				<div className='hero__content container'>
					<h1>{hero.heading}</h1>
					<p>{hero.subheading}</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
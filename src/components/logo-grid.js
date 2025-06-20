import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const LogoGrid = ( { logos, logoGridTitle } ) => {
	return (
		<div className="logo-grid">
			<h3 className="logo-grid__heading">{logoGridTitle}</h3>
			<div className="logo-grid--wrap">
				{logos.map( ( logo, index ) => {
					const image = getImage( logo.image );
					return (
						<div className="logo-grid__item" key={index}>
							<div className="logo-grid__image">
								{image && (
									<GatsbyImage
										image={image}
										alt={logo.alt || 'Partner logo'}
									/>
								)}
							</div>
							<p className="logo-grid__description">{logo.description}</p>
						</div>
					);
				} )}
			</div>
		</div>
	);
};

export default LogoGrid;
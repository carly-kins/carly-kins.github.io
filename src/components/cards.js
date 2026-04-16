import * as React from 'react';
//import { Link } from 'gatsby';
import { default as Button } from './button';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CardImage = ( {card, sm, lg} ) => {
	const featuredImg = getImage( card.project.featuredImage?.childImageSharp?.gatsbyImageData );

	return (
		<div className={sm ? 'project-cards__img--sm project-cards__img' : ( lg ? 'project-cards__img--lg project-cards__img' : 'project-cards__img' )}>
			{ featuredImg ? <GatsbyImage image={featuredImg} /> : '' }
		</div>
	);
};

const CardText = ( {card, cardText} ) => {
	let cardInfo = card.project;
	let cardHTML = cardText;
	return (
		<div className='project-cards__content'>
			<h3>{cardInfo.title} </h3>
			<p className='project-cards__badges'>
				{ cardInfo.skills ? cardInfo.skills.map( ( skill, index ) => {
					return <span key={index} className={`badge badge--${skill}`}>{skill}</span>;
				} ) : '' }
			</p>
			<p className='project-cards__text' dangerouslySetInnerHTML={{ __html: cardHTML }}></p>
			<div className='project-cards__footer'>
				{ cardInfo.projectLink || cardInfo.githubLink ? 
					<div className='project-cards__footer'>
						{ cardInfo.projectLink ? <Button link={cardInfo.projectLink} text={`Learn more about ${cardInfo.title}`} visuallyHidden={true} type={'external'} icon={true} /> : ''}
						{ cardInfo.githubLink ? <Button link={cardInfo.githubLink} text={`Visit the repo on GitHub for ${cardInfo.title}`} visuallyHidden={true} type={'github'} icon={true} />: ''}
					</div>
					: ''}
			</div>
		</div>
	);
};

const Cards = ( {cards, title, description} ) => {
	return (
		<div className='project-cards'>
			{ title ? <h2>{title}</h2> : '' }
			{ description ? <p>{description}</p> : '' }
			<ul className='project-cards__cards'>
				{ cards.map( ( card, index ) => {
					{/*Switch back and forth even and odd cards */}
					let cardNode = card.node.frontmatter;

					{/*Pulling the HTML here until I have individual pages for cards */}
					let cardText = card.node.html;
					return (
						<li key={index} className='project-cards__card'>
							{ index % 2 === 0 ?
								<>
									<CardImage card={cardNode} />
									<CardText card={cardNode} cardText={cardText}/>
								</>
								:
								<>
									<CardImage card={cardNode} sm={true} />
									<CardText card={cardNode} cardText={cardText}/>
									<CardImage card={cardNode} lg={true} />
								</>
							}
						</li>
					);
				}
				) }
			</ul>
		</div>
	);
};

export default Cards;
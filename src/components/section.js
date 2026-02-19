import * as React from 'react';
import { default as Button } from './button';

const SectionHeader = ( { section } ) => { 
	return (
		<>
			<div className='section-header__wrap'>
				<h2 className="section-header" id={section.id}>{section.heading}</h2>
				{ section.cta && <Button link={section.cta.link} text={section.cta.text} visuallyHidden={false} type='primary' icon={false} /> }
			</div>
			{section.description && <p className="section-description">{section.description}</p>}
		</> 
	);
};

const Section = ( { children, section, } ) => {
	return (
		<>
			<section className={ section.id === 'about' ? 'section section--about' : 'section' }>
				{section.id === 'about' ? 
					<div className='row'>
						{/* <div className='col-12 col-lg-6'>
							<Window/>
						</div> */}
						<div className='section-header__about'>
								<SectionHeader section={section}/>
							</div>
					</div>
					:
					<SectionHeader section={section}/>
				}
				{children}
			</section>
		</>
	);
};

export default Section;
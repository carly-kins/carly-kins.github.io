import * as React from 'react';
import { default as Button } from './button';
import Alert from '../components/alert';

const SectionHeader = ( { section, pageText, sectionID, alert } ) => { 
	return (
		<>
			<div className='section-header__wrap'>
				<h2 className="section-header" id={section.id}>{section.heading}</h2>
				{ section.cta && <Button link={section.cta.link} text={section.cta.text} visuallyHidden={false} type='primary' icon={false} /> }
			</div>
			{section.description && <p className="section-description">{section.description}</p>}
			{pageText && !section.description && sectionID === 'about' ? <div><p className="section-description" dangerouslySetInnerHTML={{ __html: pageText }}></p> <Alert alert={alert} /></div> : ''}
			
		</> 
	);
};

const Section = ( { children, section, pageText, alert } ) => {
	return (
		<>
			<section className={ section.id === 'about' ? 'section section--about' : 'section' }>
				{section.id === 'about' ? 
					<div className='container'>
						<div className='section-header__about'>
							<SectionHeader section={section} pageText={pageText} sectionID={'about'} alert={alert}/>
						</div>
					</div>
					
					:
					<div className='container'>
						<SectionHeader section={section}/>
					</div>
				}
				{children}
			</section>
		</>
	);
};

export default Section;
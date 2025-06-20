import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { default as Button } from './button';

const Footer = ( ) => {
	const data = useStaticQuery( graphql`
        query {
            markdownRemark(fileAbsolutePath: {regex: "/global.md/"}) {
                frontmatter {
                    footerDescription
                    footer {
                        link
                        text
                        visuallyHidden
                        icon
						btnType
                    }
                }
            }
        }
    ` );

	const now = new Date();
	const currentTime = now.toLocaleTimeString( [], { timeStyle: 'short' } ); 

	const footerItems = data.markdownRemark.frontmatter.footer;
	return (
		<>
			<footer className="footer start-menu" id="start-menu">
				<ul className="footer-nav">
					{footerItems.map( ( item, index ) => (
						<li className="footer-nav__item" key={index}>
							<Button link={item.link} text={item.text} visuallyHidden={false} type={item.btnType} icon={true} iconBefore={true} />
						</li>
					) )}
				</ul>
				<div className="time d-none d-md-grid">
					<time className="clock">{currentTime}</time>
				</div>
			</footer>
		</>
	);
};
  
export default Footer;
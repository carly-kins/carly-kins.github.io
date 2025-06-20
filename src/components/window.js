import * as React from 'react';
import { default as Button } from './button';
import { useStaticQuery, graphql } from 'gatsby';
import downloadFile from '../images/ResumeCarlyWootenGall.pdf';


const Window = ( ) => {
	// TODO: move this to be global
	const data = useStaticQuery( graphql`
			query {
				markdownRemark(fileAbsolutePath: {regex: "/window.md/"}) {
					frontmatter {
						title
						link
						linkText
					}
					html
				}
			}
		` );
	const windowItems = data.markdownRemark.frontmatter;
	const windowHtml = data.markdownRemark.html;
	return (
		<div className="window" id="window-welcome">
			<div className="window-inside">
				<nav className="window-nav">
					<p className='window-heading'>
						<span>{windowItems.title}</span>
					</p>
				</nav>
				<div className="window-content">
					<div className="information-container">
						<div className="information" dangerouslySetInnerHTML={{__html: windowHtml}}>
						</div>
					</div>
				</div>
				<div className="window-footer">
					<Button link={downloadFile} text={windowItems.linkText} visuallyHidden={false} type={'window'} icon={false} iconBefore={false} />
				</div>
			</div>
		</div>
	);
};

export default Window;

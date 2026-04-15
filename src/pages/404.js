import * as React from 'react';
import '../styles/styles.scss';
import Hero from '../components/hero';
import { graphql } from 'gatsby';
import '../styles/styles.scss';

const NotFoundPage = ( { data } ) => {

	const hero = data.homepage.frontmatter.hero;

	return (
		<main className='container'>
			<Hero homepage={true} hero={hero} notFound={true} />
		</main>
	);
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;

export const pageQuery = graphql`
 query indexPageQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
  homepage: markdownRemark(fileAbsolutePath: {regex: "/404.md/"}) {
    html
    frontmatter {
      hero {
        heading
        subheading
      }
    }
  }
}`;

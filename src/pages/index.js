import * as React from 'react';
import Layout from '../components/layout';
import Section from '../components/section';
import Cards from '../components/cards';
import Hero from '../components/hero';
import LogoGrid from '../components/logo-grid';
import { graphql } from 'gatsby';
import '../styles/styles.scss';




const IndexPage = ( { data } ) => {
	const hero = data.homepage.frontmatter.hero;
	const sections = data.homepage.frontmatter.sections;
	const projectCards = data.projectCards.edges;

	return (
		<Layout homepage={true}>
			<Hero homepage={true} hero={hero} />
			<div className='container'> 
				{sections.map( ( section, index ) => 
					<Section key={index} section={section}>
						{ section.id === 'about' ? <LogoGrid logos={section.logoGrid} logoGridTitle={section.logoGridTitle} /> : '' }
						{ section.id === 'projects' ? <Cards cards={projectCards} /> : '' }
					</Section>
				) }
			</div>
		</Layout>
	);
};

export default IndexPage;
export const pageQuery = graphql`
 query indexPageQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
  homepage: markdownRemark(fileAbsolutePath: {regex: "/homepage.md/"}) {
    frontmatter {
      hero {
        heading
        subheading
        alt
        img {
          childImageSharp {
            gatsbyImageData(width: 1080)
          }
        }
      }
      sections {
        description
        heading
        id
        cta {
          link
          text
          type
          visuallyHidden
          icon
        }
        logoGridTitle
        logoGrid {
          link
          alt
          description
          image {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
      }
    }
  }
  projectCards: allMarkdownRemark(
    filter: {frontmatter: {project: {highlight: {eq: true}}, type: {eq: "project"}}}
  ) {
    edges {
      node {
        frontmatter {
          slug
          project {
            description
            projectLink
            githubLink
            title
            skills
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
          }
        }
      }
    }
  }
}`;

export { Head } from '../components/head';
/* eslint-disable no-undef */
exports.createSchemaCustomization = ( { actions } ) => {
	const { createTypes } = actions;
	createTypes( `
		type MarkdownRemark implements Node {
		frontmatter: Frontmatter
		}

		type Frontmatter {
			featuredImage: File @fileByRelativePath
			nav: [Nav]
			footerDescription: String
			footer: [Button]
			sections: [Sections]
			hero: Hero
			alert: Alert
			slug: String
			type: String
			project: Project
			title: String
			link: String
			linkText: String
		}

		type Nav {
			title: String
			url: String
		}

		type Footer {
			title: String
			url: String
			btnType: String
		}

		type Sections {
			heading: String
			description: String
			id: String
			cta: Button
			logoGrid: [LogoItem]
		}

		type Button {
			link: String
			text: String
			visuallyHidden: Boolean
			type: String
			icon: Boolean
		}

		type Hero {
			heading: String
			subheading: String
			img: File @fileByRelativePath
			alt: String
		}

		type Alert {
			description: String
		}

		type Project {
			title: String
			projectLink: String
			githubLink: String
			description: String
			id: String
			featuredImage: File @fileByRelativePath
			highlight: Boolean
			logo: File @fileByRelativePath
			skills: [String]
		}

		type LogoItem {
			link: String
			image: File @fileByRelativePath
			alt: String
			description: String
		}
  ` );
};


// exports.createPages = async function ( { actions, graphql } ) {
// 	const result = await graphql( `
//     {
//         allMarkdownRemark (
//             sort: { frontmatter: { date: DESC } }
//             limit: 1000
//             filter: { frontmatter: { type: {eq: "project" } } }
//         ) {
//             edges {
//                 node {
//                     id
//                     frontmatter {
//                         slug
//                     }
//                 }
//             }
//         }
//     }
//     ` );
  
// 	if ( result.errors ) {
// 		throw result.errors;
// 	}
	
// 	// create project pages
// 	const projects = result.data.allMarkdownRemark.edges;
  
// 	projects.forEach( edge => {
// 		const slug = edge.node.frontmatter.slug;
  
// 		if ( !slug ) {
// 			// eslint-disable-next-line no-console
// 			console.warn( `Missing slug for post ID: ${edge.node.id}` );
// 			return; // skip creating this page
// 		}
  
// 		actions.createPage( {
// 			path: slug,
// 			component: require.resolve( './src/templates/blog-post.js' ),
// 			context: { slug },
// 		} );
// 	} );
// };


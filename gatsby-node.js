const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	// Grab the path name
	const blogTemplate = path.resolve("./src/templates/blog.js")

	// Grab the Markdown Data
	const response = await graphql(`
		query {
			allContentfulBlogPost {
				edges {
					node {
						slug
					}
				}
			}
		}
	`)
	
	// Create new page
	response.data.allContentfulBlogPost.edges.map(edge => {
		createPage({
			component: blogTemplate,
			path: `/blog/${edge.node.slug}`,
			context: {
				slug: edge.node.slug,
			},
		})
	})
}

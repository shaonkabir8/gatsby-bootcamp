const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions

	if (node.internal.type === "MarkdownRemark") {
		const slug = path.basename(node.fileAbsolutePath, ".md")

		createNodeField({
			node,
			name: "slug",
			value: slug,
		})
	}
}

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	// Grab the path name
	const blogTemplate = path.resolve("./src/templates/blog.js")

	// Grab the Markdown Data
	const response = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	// Create new page
	response.data.allMarkdownRemark.edges.map(edge => {
		createPage({
			component: blogTemplate,
			path: `/blog/${edge.node.fields.slug}`,
			context: {
				slug: edge.node.fields.slug,
			},
		})
	})
}

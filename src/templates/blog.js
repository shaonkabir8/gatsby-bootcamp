import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			publishedDate(formatString: "Do MMMM YYYY")
			postContent {
				json
			}
		}
	}
`
const Blog = props => {
	const options = {
		renderNode: {
			"embedded-asset-block": node => {
				const alt = node.data.target.fields.title["en-US"]
				const url = node.data.target.fields.file["en-US"].url
				return <img alt={alt} src={url} />
			},
		},
	}

	return (
		<Layout>
			<h3>{props.data.contentfulBlogPost.title}</h3>
			<p>{props.data.contentfulBlogPost.publishedDate}</p>
			{documentToReactComponents(
				props.data.contentfulBlogPost.postContent.json,
				options
			)}
		</Layout>
	)
}

export default Blog

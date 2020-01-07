import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"
import BlogStyles from '../styles/BlogStyles'


const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            publishedDate(formatString: "Do MMMM YYYY")
            slug
          }
        }
      }
    }
  `)

  return (
    <BlogStyles>
      <Layout>
        <Head title="Blog" />
        <h3>Recent Posts</h3>
        <ol className="post">
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li key={edge.node.title}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </BlogStyles>
  )
}

export default Blog

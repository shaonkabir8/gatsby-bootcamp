import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import Head from "../components/Head"

const BlogStyles = styled.div`
  .post {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .post li a {
    text-decoration: none;
    background: #f4f4f4;
    color: #000;
    transition: 0.2s;
    display: block;
    padding: 1rem;
  }
  .post li a:hover {
    background: #e4e4e4;
  }
  .post h2 {
    margin-bottom: 0;
  }
  .post p {
    font-size: 0.8rem;
    font-style: italic;
    color: #777;
  }
`

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

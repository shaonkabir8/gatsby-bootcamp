import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h2>Blog Page</h2>
      <h3>Recent Posts</h3>
      <ol>
        {data.allMarkdownRemark.edges.map(data => {
          return (
            <li key={data.node.frontmatter.title}>
              <Link to={`/blog/${data.node.fields.slug}`}> 
                <h2>{data.node.frontmatter.title}</h2>
                <p>{data.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog

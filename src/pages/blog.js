import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"

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
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h2> Blog Page </h2>
      <h3>Recent Posts</h3>
      <ol>
        {data.allMarkdownRemark.edges.map(data => {
          return (
            <li key={data.node.frontmatter.title}>
              <h2>{data.node.frontmatter.title}</h2>
              <p>{data.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog

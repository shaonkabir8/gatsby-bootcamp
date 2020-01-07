import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from 'styled-components';
import Layout from "../components/Layout"


const BlogStyles = styled.div`
  .post {
    list-style:none;
    margin:0;
    padding:0;
  }
  .post li a {
    text-decoration:none;
    background: #f4f4f4;
    color:#000;
    transition: .2s;
    display:block;
    padding:1rem;
  }
  .post li a:hover {
    background:#e4e4e4;
  }
  .post h2 {
    margin-bottom:0;
  }
  .post p {
    font-size:.8rem;
    font-style:italic;
    color:#777;
  }

`


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
    <BlogStyles>
      <Layout>
        <h2>Blog Page</h2>
        <h3>Recent Posts</h3>
        <ol className="post">
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
    </BlogStyles>
  )
}

export default Blog

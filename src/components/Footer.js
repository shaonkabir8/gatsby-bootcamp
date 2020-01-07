import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
const FooterStyle = styled.div`
  footer {
    margin-top: 3rem;
  }
`
const Footer = () => {
  const data = useStaticQuery(graphql`
    query authorName {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <FooterStyle>
      <footer>
        <p className="text-center">
          Created by {data.site.siteMetadata.author} with lot of <i className="fas fa-heart"></i> and <i className="fas fa-coffee"></i>
        </p>
      </footer>
    </FooterStyle>
  )
}

export default Footer

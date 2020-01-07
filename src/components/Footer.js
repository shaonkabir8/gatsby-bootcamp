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
          Site Created with lot of &#x2764; and &#x2615; by {data.site.siteMetadata.author}
        </p>
      </footer>
    </FooterStyle>
  )
}

export default Footer

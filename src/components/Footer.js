import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
const FooterStyle = styled.div`
  footer p {
    text-align: center;
    padding: 20px 0;
    display: block;
    box-shadow: 0 0 5px #333;
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
          All right reserved 😍 {data.site.siteMetadata.author} &copy; 2020
        </p>
      </footer>
    </FooterStyle>
  )
}

export default Footer

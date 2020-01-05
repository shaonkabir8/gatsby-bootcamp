import React from "react"
import styled from "styled-components"

const FooterStyle = styled.div`
  footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  footer p {
    text-align: center;
    padding: 20px 0;
    display: block;
    box-shadow: 0 0 5px #333;
  }
`
const footer = () => (
  <FooterStyle>
    <footer>
      <p className="text-center">All right reserved &copy; 2020</p>
    </footer>
  </FooterStyle>
)

export default footer

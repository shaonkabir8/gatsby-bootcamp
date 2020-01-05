import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/style.scss"
import styled from "styled-components"

const LayoutStyle = styled.div`
  .layout {
    margin: 0 auto;
    max-width: 1100px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .layout-content {
    flex-grow: 1;
  }
`

const layout = props => {
  return (
    <LayoutStyle>
      <div className="layout">
        <div className="layout-content">
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </LayoutStyle>
  )
}

export default layout

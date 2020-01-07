import React from "react"
import styled from "styled-components"
import { Helmet } from 'react-helmet'
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/style.scss"

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
    <Helmet>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
    </Helmet>
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

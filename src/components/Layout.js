import React from "react"
import { Helmet } from "react-helmet"
import styled from 'styled-components'
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/style.scss"

const LayoutStyle = styled.div`
  .layout-content h3 {
    margin-bottom: 32px;
    text-transform: uppercase;
  }
`;

const layout = props => {
  return (
    <LayoutStyle>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,500,600,700,900&display=swap" rel="stylesheet"/> 
      </Helmet>
      <Header />
      <div className="container layout" style={{padding:"5% 0"}}>
        <div className="layout-content">{props.children}</div>
      </div>
      <Footer />
    </LayoutStyle>
  )
}

export default layout

import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/style.scss"

const layout = props => {
  return (
    <React.Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
      </Helmet>
      <Header />
      <div className="container layout">
        <div className="layout-content">{props.children}</div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default layout

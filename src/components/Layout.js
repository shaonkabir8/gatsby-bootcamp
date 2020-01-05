import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/style.scss"

const layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default layout

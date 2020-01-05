import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
const indexPage = () => {
  return (
    <Layout>
      <h2>Hello,</h2>
      <h3>I'm Shaon Kabir, a frontend developer living in Bangladesh</h3>
      <p>
        Need a developer ?? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default indexPage

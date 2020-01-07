import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from '../components/Head';


const indexPage = () => {
  return (
    <Layout>
    <Head title="Home" />
      <h2>Hello,</h2>
      <h3>I'm Shaon Kabir, a frontend developer living in Bangladesh</h3>
      <p>
        Need a developer ?? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default indexPage

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"
import HomepageStyle from '../styles/HomepageStyle'

const indexPage = () => {
  return (
    <HomepageStyle>
      <Layout>
        <Head title="Home" />
        <div className="homepage-content">
          <h3>Hello,</h3>
          <h1>I'm Shaon Kabir,</h1>
          <h4>JavaScript Lover and Open Source Entuasiast</h4>
          <Link to="/about">More About me <i class="fas fa-long-arrow-alt-right"></i></Link>
        </div>
      </Layout>
    </HomepageStyle>
  )
}

export default indexPage

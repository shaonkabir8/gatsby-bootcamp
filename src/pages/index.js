import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/Layout"
import Head from "../components/Head"

const HomepageStyle = styled.div`
  .homepage-content {
    text-align: center;
    padding: 10%;
  }
  .homepage-content h1 {
    font-weight: 900;
    font-family: monaco;
  }
  .homepage-content a {
    display:inline-block;
    text-decoration:none;
    color:#fff;
    background:#542c85;
    padding:15px 20px;
  }
`;

const indexPage = () => {
  return (
    <HomepageStyle>
      <Layout>
        <Head title="Home" />
        <div className="homepage-content">
          <h3>Hello,</h3>
          <h1>I'm Shaon Kabir,</h1>
          <h4>JavaScript Lover and Open Source Entuasiast</h4>
          <Link to="/about">More About me</Link>
        </div>
      </Layout>
    </HomepageStyle>
  )
}

export default indexPage

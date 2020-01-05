import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
const about = () => (
  <Layout>
    <h3>About me</h3>
    <p>
      I'm <strong>Shaon Kabir</strong>, JavaScript lover and dedicated fronted
      developer living in Bangladesh. I've more than two years of experience of
      building responsive website. I'm quite proficient in modern frontend
      technologies like JAMStack, React.
    </p>
    <p>
      To know more, feel free to
      <Link to="/contact">Contact me</Link> anytime
    </p>
  </Layout>
)

export default about

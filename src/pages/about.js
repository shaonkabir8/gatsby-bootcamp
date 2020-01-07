import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import AboutStyle from '../styles/AboutStyle'
import myImage from '../images/shaon.jpg'

const about = () => (
  <AboutStyle>
    <Layout>
      <Head title="About" />
      <h3>About me</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="about-deatils">
            <p>
              I'm <strong>Shaon Kabir</strong>, JavaScript lover and dedicated
              Frontend developer with more than two years of experiences of
              building website in this recruiting industry.
            </p>
            <p>
              I'm quite Proﬁcient in HTML,CSS, JavaScript; plus modern libraries
              and frameworks like React js.Obviously I'm passionate about
              usability and possess working knowledge of Adobe Photoshop.I’d love
              to develop my skills being updated according to trends and
              Technology
            </p>
            <a href="https://github.com/Shaonkabir" className="boxed-btn">Download CV <i className="fas fa-download"></i></a>
            <a href="https://github.com/Shaonkabir" className="boxed-btn">Github Profile <i className="fab fa-github"></i></a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-image text-center">
            <img src={myImage} alt="Myself" />
          </div>
        </div>
      </div>
    </Layout>
  </AboutStyle>
)

export default about

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

import photo from '../images/shaon.jpg'
import styled from 'styled-components'

const AboutStyle = styled.div`
  
  .about-deatils {
    padding-right: 40px;
    line-height: 1.78;
  }
  .about-image img {
    max-width: 350px;
    text-align: ;
    max-height: 350px;
    width: ;
  }
  .boxed-btn {
    display: inline-block;
    background: #542c85;
    color: #fff;
    padding: 10px 17px;
    margin-right: 15px;
    margin-top: 10px;
    border-radius: 5px;
    transition: .2s;
  }
  .boxed-btn i {
    display: inline-block;
    margin-left: 10px;
    font-size: 20px;
  }
  .boxed-btn:hover {
    color: #b4acac;
    text-decoration: none;
  }
`;

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
            <a href="" className="boxed-btn">Download CV <i className="fas fa-download"></i></a>
            <a href="" className="boxed-btn">Github Profile <i className="fab fa-github"></i></a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-image text-center">
            <img src={photo} alt="Image" />
          </div>
        </div>
      </div>
    </Layout>
  </AboutStyle>
)

export default about

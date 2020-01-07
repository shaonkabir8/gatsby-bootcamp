import styled from "styled-components"


const HomepageStyle = styled.div`
  .homepage-content {
    text-align: center;
    padding-top: 5%;
    padding-bottom: 0;
    height: 100vh;
  }
  .homepage-content h1 {
    font-weight: 900;
    font-family: monaco;
  }
  .homepage-content a {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    background: #542c85;
    padding: 15px 20px;
    margin-top: 20px;
  }
  .homepage-content a i {
    display: inline-block;
    margin-left: 16px;
  }
  .homepage-content a:hover {
    color: #a7a3a3;
  }
  .homepage-content h3 {
    margin-bottom: 6px !important;
  }
`

export default HomepageStyle;
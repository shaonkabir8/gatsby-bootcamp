import styled from "styled-components"

const HeaderStyle = styled.div`
  .header {
    background: #542c85;
    color: #fff; 
    padding: 10px 0;
  }
  .logo a {
    color: #fff;
    font-size:40px;
    text-decoration: none;
    font-weight: 900;
  }
  .menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .menu ul li {
    display: inline-block;
    margin:0;
  }
  .menu ul li a {
    display: block;
    font-size: 20px;
    text-decoration: none;
    padding: 15px 25px;
    color: #9b9a9a;
    transition: 0.2s;
  }
  .menu ul li a:hover {
    color: #ddd;
  }

  .activeClass {
    color: #fff !important;
  }
`

export default HeaderStyle;
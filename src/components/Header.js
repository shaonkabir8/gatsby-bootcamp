import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderStyle = styled.div`
  .logo a {
    color: #000;
    font-size: 3rem;
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
  }
  .menu ul li a {
    display: block;
    font-size: 20px;
    text-decoration: none;
    padding: 10px;
    color: #000;
    transition: 0.2s;
    position: relative;
  }
  .menu ul li a::before {
    position: absolute;
    left: 7px;
    bottom: 4px;
    width: 85%;
    height: 2px;
    content: "";
    background: black;
    opacity: 0;
    transition: 0.2s;
  }
  .menu ul li a:hover::before {
    opacity: 1;
  }
`

const header = () => (
  <HeaderStyle>
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="logo">
              <Link to="/">Shaon Kabir</Link>
            </div>
          </div>
          <div className="col-md-6">
            <nav className="menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </HeaderStyle>
)
export default header

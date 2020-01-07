import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
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

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <HeaderStyle>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="logo">
                <Link to="/">{data.site.siteMetadata.title}</Link>
              </div>
            </div>
            <div className="col-md-6">
              <nav className="menu">
                <ul>
                  <li>
                    <Link to="/" activeClassName="activeClass">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" activeClassName="activeClass">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" activeClassName="activeClass">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" activeClassName="activeClass">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </HeaderStyle>
  )
}
export default Header

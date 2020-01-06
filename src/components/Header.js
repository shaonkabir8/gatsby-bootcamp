import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
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
    color: #999;
    transition: 0.2s;
  }
  .menu ul li a:hover {
    color: #666;
  }

  .activeClass {
    color: #333 !important;
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
                <Link to="/">{data.site.siteMetadata.author}</Link>
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

import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import HeaderStyle from '../styles/HeaderStyle'

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

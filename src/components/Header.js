import React from "react"
import { Link } from "gatsby"

const header = () => (
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
)
export default header

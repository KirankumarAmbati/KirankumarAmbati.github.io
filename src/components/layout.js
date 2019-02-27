import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import "../../static/main.css"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header

    header = (
      <h3
        style={{
          marginTop: 0,
          display:"flex",
          backgroundColor: 'black'
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `white`,
            marginRight: '3%',
            padding: '1%'
          }}
          to={`/`}
        >
          {title}
        </Link>
        <Link className="link" activeClassName="active-class" to={`/`}>HOME</Link>
        <Link className="link" activeClassName="active-class" to={`/blog`}>BLOG</Link>
        {/* <Link className="link" activeClassName="active-class" to={`/talks`}>TALKS</Link>
        <Link className="link" activeClassName="active-class" to={`/i-can-not-react`}>I CAN NOT REACT</Link> */}
      </h3>
    )
    return (
      <div>
        <div>
          <header>{header}</header>
        </div>
        <div
          style={{
            marginLeft: `10%`,
            marginRight: `10%`,
            maxWidth: rhythm(32),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <main style={{minHeight: "calc(100vh - 220px)"}}>{children}</main>
        </div>
        <div>
          <footer style={{textAlign: "center", backgroundColor: "black", color: "white"}}>
            Crafted with Love by Kirankumar.
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout

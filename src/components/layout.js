import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import SideBar from "./SideNavigation"
import "../../static/main.css"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header

    header = (
      <div>
        <SideBar />
        <h3
          style={{
            marginTop: 0,
            display:"flex",
            backgroundColor: "black",
            width: "100%",
            padding: "2.5%"
          }}
        >
          <Link
            className="brand"
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `white`,
              marginRight: '3%',
              padding: '1%',
            }}
            to={`/`}
          >
            {title}
          </Link>
          <Link className="link" activeClassName="active-class" to={`/`}>home</Link>
          <Link className="link" activeClassName="active-class" to={`/blog`}>blog</Link>
          <Link className="link" activeClassName="active-class" to={`/talks`}>talks</Link>
          <a className="link" href="https://i-can-not-react.netlify.com/">i-can-not-react</a>
        </h3>
      </div>
    )
    return (
      <div>
        <div>
          <header>{header}</header>
        </div>
        <div
          className="main"
          style={{
            maxWidth: rhythm(32),
            padding: `0 ${rhythm(3 / 4)}`
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

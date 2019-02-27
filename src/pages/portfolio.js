import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

class Portfolio extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title={"Kiran's Portfolio"}>
        <p>Portfolio is being crafted. Meanwhile, feel free to visit my <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `blue`,
            }}
            to={`/blog`}
          >
            blog
          </Link></p>
      </Layout>
    )
  }
}

export default Portfolio

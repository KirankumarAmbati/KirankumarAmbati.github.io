import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "./portfolio"
import { rhythm } from "../utils/typography"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookF, faGooglePlusG, faLinkedinIn, faRedditAlien, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faFacebookF, faGooglePlusG, faLinkedinIn, faRedditAlien, faWhatsapp, faTwitter)

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`,
          `react`, `frontend`, `front-end`, `webdeisgn`,
          `webdevelop`, `webdeveloper`, `programming`, `coding`,
          `portfolio`, `reactjs`, `ui`, `ux`, `node`, `nodejs`, `expressjs`
        ]}
        />
        <Portfolio />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
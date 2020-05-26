import React from "react"
import { Link, graphql } from "gatsby"
import { DiscussionEmbed } from 'disqus-react'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Share from "../components/ShareComponent"
import { rhythm, scale } from "../utils/typography"
import Subscribe from '../components/Subscribe'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const {title} = this.props.data.site.siteMetadata
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={title}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          keywords={post.frontmatter.tags}
        />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
        <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                ← <span>{next.frontmatter.title}</span>
              </Link>
            )}
          </li>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                <span>{previous.frontmatter.title}</span> →
              </Link>
            )}
          </li>
        </ul>
        <h1 style={{marginTop: 0}}>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(1),
          }}
        >
          Posted on: {post.frontmatter.date}
        </p>
        <Share
          socialConfig={{
            twitterHandle: this.props.data.site.siteMetadata.social.twitter,
            config: {
              url: `${this.props.data.site.siteMetadata.siteUrl}${this.props.location.pathname.slice(1)}`,
              title: post.frontmatter.title,
            },
          }}
          tags={post.frontmatter.tags}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <Bio />
        <Subscribe typedNeeded={false}/>

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                ← <span>{next.frontmatter.title}</span>
              </Link>
            )}
          </li>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                <span>{previous.frontmatter.title}</span> →
              </Link>
            )}
          </li>
        </ul>

        <DiscussionEmbed shortname="kirankumarambati" config={{identifier: post.id, title: post.frontmatter.title}} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        social {
          twitter
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import TypeWrite from '../components/typeWrite'
import { StaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { SocialIcon } from 'react-social-icons';
import pose from 'react-pose'

class Portfolio extends React.Component {
  state = {
    typingFinished: false
  }
  render() {
    return (
      <StaticQuery
        query={SocialQuery}
        render={data => {
          const { social } = data.site.siteMetadata
          return (
            <div
              style={{
                display: `flex`,
                marginBottom: rhythm(2.5),
              }}
            >
              <div style={{fontSize: "1.2rem"}}>
                <TypeWrite
                    strings={["Hey Pal !"]}
                    startDelay = {100}
                    showCursor={false}
                />
                <TypeWrite
                  strings={["Glad to meet you !"]}
                  startDelay = {2000}
                />
                <TypeWrite
                  strings={["You are here to know me."]}
                  startDelay = {3500}
                />
                <TypeWrite
                  strings={["So, let me introduce myself."]}
                  startDelay = {6500}
                />
                <TypeWrite
                  strings={["I'm Kirankumar Ambati from India."]}
                  startDelay = {9000}
                />
                <TypeWrite
                  strings={["Frontend + React is my LOVE"]}
                  startDelay = {12000}
                />
                <TypeWrite
                  strings={["Teaching is my passion."]}
                  startDelay = {15000}
                />
                <TypeWrite
                  strings={["wanna know more about me or get in touch with me ? "]}
                  startDelay = {17000}
                  onComplete={() => this.setState({typingFinished: true})}
                />
                {
                  this.state.typingFinished && (
                    <p>
                      <SocialIcon url={`https://github.com/${social.github}`} bgColor="white" fgColor="black" target="_blank" style={{ height: 80, width: 80, color: "white" }} />
                      <SocialIcon url={`https://www.linkedin.com/in/${social.linkedin}`} bgColor="white" fgColor="black" target="_blank" style={{ height: 80, width: 80, color: "white" }} />
                      <SocialIcon url={`https://twitter.com/${social.twitter}`} bgColor="white" fgColor="black" target="_blank" style={{ height: 80, width: 80, color: "white" }} />
                  </p>
                  )
                }
              </div>
            </div>
          )
        }}
      />
    )
  }
}

export default Portfolio

export const SocialQuery = graphql`
  query SocialQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter,
          linkedin,
          github
        }
      }
    }
  }
`

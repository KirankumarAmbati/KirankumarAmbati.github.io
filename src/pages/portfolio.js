import React from "react"
import TypeWrite from '../components/typeWrite'
import { StaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { SocialIcon } from 'react-social-icons'
import addToMailChimp from 'gatsby-plugin-mailchimp'
import Subscribe from "../components/Subscribe";

class Portfolio extends React.Component {
  state = {
    email: '',
    response: {
        result: '',
        msg: ''
    },
    showSubscribe: false,
    showSocialIcons: false
  }

  onSubmit = () => {
    addToMailChimp(this.state.email)
    .then(data => this.setState({response: data}))
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
                  startDelay = {5500}
                />
                <TypeWrite
                  strings={["I'm Kirankumar Ambati from India."]}
                  startDelay = {8000}
                />
                <TypeWrite
                  strings={["Frontend + React is my LOVE"]}
                  startDelay = {11000}
                />
                <TypeWrite
                  strings={["Teaching is my passion."]}
                  startDelay = {14000}
                />
                <TypeWrite
                  strings={["Want to know more about me or get in touch with me ? "]}
                  startDelay = {16000}
                  onComplete={() => this.setState({showSocialIcons: true})}
                />
                {
                  this.state.showSocialIcons && (
                    <div>
                      <SocialIcon url={`https://github.com/${social.github}`} bgColor="white" fgColor="black" target="_blank" style={{ height: 80, width: 80, color: "white" }} />
                      <SocialIcon url={`https://www.linkedin.com/in/${social.linkedin}`} bgColor="white" fgColor="black" target="_blank" style={{ height: 80, width: 80, color: "white" }} />
                      <SocialIcon url={`https://twitter.com/${social.twitter}`} bgColor="white" fgColor="black" target="_blank" style={{ height: 80, width: 80, color: "white" }} />
                  </div>
                  )
                }
                <div>
                  { this.state.showSubscribe && <Subscribe typedNeeded={true}/> }
                </div>
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

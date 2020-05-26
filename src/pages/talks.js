import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import {
  Card,
  CardDeck,
  Button,
  Alert,
  Badge,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap"

import { talks } from "../utils/talks_data"
import OpenInNewTabIcon from "../components/OpenInNewTabIcon"

class Talks extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[
            `blog`,
            `gatsby`,
            `javascript`,
            `react`,
            `frontend`,
            `front-end`,
            `webdeisgn`,
            `webdevelop`,
            `webdeveloper`,
            `programming`,
            `coding`,
            `portfolio`,
            `reactjs`,
            `ui`,
            `ux`,
            `node`,
            `nodejs`,
            `expressjs`,
          ]}
        />
        {talks.map(({ title, description = "", link, date, attendees }) => (
          <CardDeck>
            <Card style={{ marginTop: "4%" }}>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Alert variant="dark">
                  <Card.Text>
                    {description} <br />
                    <Button variant="dark" href={link} target="_blank">
                      Learn More !{" "}
                      
                      <OverlayTrigger
                        placement={"top"}
                        overlay={<Tooltip>Attendees</Tooltip>}
                      >
                        <Badge style={{marginLeft: '5px'}} variant="warning">{attendees}</Badge>
                      </OverlayTrigger>
                      <OpenInNewTabIcon />
                    </Button>
                  </Card.Text>
                </Alert>
              </Card.Body>
            </Card>
          </CardDeck>
        ))}
      </Layout>
    )
  }
}

export default Talks

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

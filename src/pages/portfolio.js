import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import TypeWrite from '../components/typeWrite'
class Portfolio extends React.Component {
  render() {
    return (
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
            strings={["You are here to know me. So, let me introduce myself."]}
            startDelay = {5000}
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
      </div>
    )
  }
}

export default Portfolio

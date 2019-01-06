import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <p>@_sudo_user</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
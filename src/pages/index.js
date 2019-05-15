import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Bio from '../components/bio'
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout page='1'>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Salut</h1>
    <Bio />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

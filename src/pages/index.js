import React from 'react'
import { Link } from 'gatsby'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Hero height="full" />
    <div className="with-padding">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage

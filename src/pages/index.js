import React from 'react'
import { Link } from 'gatsby'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Image from '../components/image'
const IndexPage = () => (
  <Layout>
    <Hero />
    <div className="wp">
      <h2>Hi people</h2>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/about/">Go to About page</Link>
    </div>
  </Layout>
)

export default IndexPage

import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'

const SecondPage = () => (
  <Layout>
    <Hero title="About Page" caption="Welcome to the About Page" />
    <div className="wp">
      <h2>Hi from the second page</h2>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage

import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { Container } from '../components/generic'

const About = () => (
  <Layout>
    <Hero title="About Page" caption="Welcome to the About Page" />
    <div className="wp">
      <Container>
        <h2>Hi from the second page</h2>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </div>
  </Layout>
)

export default About

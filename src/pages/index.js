import React from 'react'
import { Link } from 'gatsby'
import Hero from '../components/hero'
import Layout from '../components/layout'
import { Container } from '../components/generic'

const Home = () => (
  <Layout>
    <Hero />
    <div className="wp">
      <Container>
        <h2>Hi people</h2>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/about/">Go to About page</Link>
      </Container>
    </div>
  </Layout>
)

export default Home

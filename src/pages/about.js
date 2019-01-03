import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { Container } from '../components/generic'

const About = ({ data }) => (
  <Layout>
    <Hero title="About Page" caption="Welcome to the About Page" />
    <div className="wp">
      <Container>
        <h2>Hi from the second page</h2>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
        <div
          css={`
            max-width: 300px;
            margin-bottom: 1.45rem;
          `}
        >
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
      </Container>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About

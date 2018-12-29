import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Parallax, { OverflowSection } from '../components/parallax'
import { GridItem } from '../components/generic'
import { Terminal } from '../components/terminal'

const Work = () => (
  <Layout>
    <Parallax image={'/assets/particles.png'} height="80%">
      <GridItem white>
        <h1>Our Work</h1>
        <p>Check out what we do</p>
      </GridItem>
    </Parallax>
    <OverflowSection>
      <Terminal>
        <GridItem white>
          <pre>
            $ ~/: echo "We love GraphQL!"
            <br />
            $ ~/: echo "We love React!"
            <br />$ ~/: echo "We love NodeJS!"
          </pre>
        </GridItem>
      </Terminal>
    </OverflowSection>
    <div className="wp">
      <h2>Our Work</h2>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Work

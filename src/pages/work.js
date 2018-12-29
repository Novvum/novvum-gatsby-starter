import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Parallax, { OverflowSection } from '../components/parallax'
import { GridItem, TerminalType } from '../components/generic'

const Work = () => (
  <Layout>
    <Parallax image={'/assets/particles.png'} height="80%">
      <GridItem white>
        <h1>Our Work</h1>
        <p>Check out what we do</p>
      </GridItem>
    </Parallax>
    <OverflowSection>
      <TerminalType
        items={[
          'We love React!',
          'We love Apollo!',
          'We love Prisma!',
          'We love Hasura!',
        ]}
      >
        We love GraphQL!
      </TerminalType>
    </OverflowSection>
    <div className="wp">
      <h2>Our Work</h2>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Work

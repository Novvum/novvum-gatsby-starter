import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Parallax, { OverflowSection } from '../components/parallax'
import { Center } from '../components/generic'
import { Terminal } from '../components/terminal'

const Work = () => (
  <Layout>
    <Parallax image={'https://cdn.pbrd.co/images/HTUwlPj.png'} height="80%">
      <Center>
        <h1>hi</h1>
      </Center>
    </Parallax>
    <OverflowSection>
      <Terminal>Hi</Terminal>
    </OverflowSection>
    <div className="wp">
      <h2>Our Work</h2>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Work

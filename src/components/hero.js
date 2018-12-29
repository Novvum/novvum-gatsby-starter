import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '../styled'
import { Caption, Container } from './generic'

const HeroWrapper = styled.div`
  flex: 1;
	width: 100%;
	height: ${p => p.height};
	overflow: hidden;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
  padding: 2.5rem;
  color: ${p => p.theme.colors.white};
  background-color:  ${p => p.theme.editorColors.dark.resultBackground}; 
	/* background-image: url("${p => p.image || '/assets/graphqlEngine.svg'}");
	background-size: cover; 	
  background-repeat: no-repeat;
  background-blend-mode: darken; */
`

const Hero = ({
  title = 'Novvum Gatsby Starter',
  caption = 'This is a small starter kit to help you kickstart your Gatsby project!',
  height = '75%',
}) => (
  <HeroWrapper height={height}>
    <Container>
      <h1>{title}</h1>
      <Caption>{caption}</Caption>
    </Container>
  </HeroWrapper>
)

Hero.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  image: PropTypes.string,
  height: PropTypes.string,
}

export default Hero

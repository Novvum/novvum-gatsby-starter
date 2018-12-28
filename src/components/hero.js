import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '../styled'

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
  background-color:  ${p => p.theme.editorColors.dark.editorBackground}; 
	/* background-image: url("${p => p.image || '/assets/graphqlEngine.svg'}");
	background-size: cover; 	
  background-repeat: no-repeat;
  background-blend-mode: darken; */
`

const HeroCaption = styled.p`
  color: ${p => p.theme.colors.white60};
`

const Hero = ({
  title = 'Novvum Gatsby Starter',
  caption = 'This is a small starter kit to help you kickstart your Gatsby project!',
  height = '75%',
}) => (
  <HeroWrapper height={height}>
    <h1>{title}</h1>
    <HeroCaption>{caption}</HeroCaption>
  </HeroWrapper>
)

Hero.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  image: PropTypes.string,
  height: PropTypes.string,
}

export default Hero

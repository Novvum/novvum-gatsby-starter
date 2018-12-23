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
  background: ${p => p.theme.colors.darkBlue};
  padding: 2.5rem;
  color: white;

	/* background-image: url("${p => p.image || '/assets/DarkMachine.png'}"); */
	/* background-size: cover; */
	/* background-repeat: no-repeat; */
	/* background-color: rgba(0,0,0,.5);  */
  /* background-blend-mode: darken; */
`

const HeroCaption = styled.p`
  color: rgba(255, 255, 255, 0.75);
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

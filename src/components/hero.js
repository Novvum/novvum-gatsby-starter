import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '../styled'

const HeroWrapper = styled.div`
  flex: 1;
	width: 100%;
	height: ${p => p.theme.sizes.hero[p.height]};
	overflow: hidden;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
  background: ${p => p.theme.colors.darkBlue};
  padding: 2.5rem;
	/* background-image: url("${p => p.image || '/assets/DarkMachine.png'}"); */
	/* background-size: cover; */
	/* background-repeat: no-repeat; */
	/* background-color: rgba(0,0,0,.5);  */
  /* background-blend-mode: darken; */
`

const HeroTitle = styled.h1`
  font-size: 2em;
  color: white;
  font-weight: 600;
`

const HeroCaption = styled.p`
  color: rgba(255, 255, 255, 0.75);
`

const Hero = ({ title, caption, image, height }) => (
  <HeroWrapper height={height} image={image}>
    <HeroTitle>{title}</HeroTitle>
    <HeroCaption>{caption}</HeroCaption>
  </HeroWrapper>
)

Hero.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  image: PropTypes.string,
  height: PropTypes.string,
}

Hero.defaultProps = {
  title: 'Novvum Gatsby Starter',
  height: 'md',
  caption:
    'This is a small starter kit to help you kickstart your Gatsby project!',
  image: '/assets/DarkMachine.png',
}

export default Hero

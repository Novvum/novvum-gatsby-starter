import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '../styled'

const HeroWrapper = styled.div`
	width: 100%;
	height: ${p => p.theme.sizes.hero[p.height]};
	overflow: hidden;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	text-align: center;
	justify-content: center;
	background-image: url("${p => p.image || '/assets/DarkMachine.png'}");
	background-size: cover;
	background-repeat: no-repeat;
	background-color: rgba(0,0,0,.5); // Tint color
  background-blend-mode: darken;
`

const HeroTitle = styled.h1`
  font-size: 2em;
  color: ${p => p.theme.colors.white};
  font-weight: 600;
  width: 60%;
`

const HeroCaption = styled.p`
  color: ${p => p.theme.colors.white};
  width: 60%;
`

const Hero = ({ title, caption, image }) => (
  <HeroWrapper image={image}>
    <HeroTitle>{title}</HeroTitle>
    <HeroCaption>{caption}</HeroCaption>
  </HeroWrapper>
)

Hero.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  image: PropTypes.string,
  height: PropTypes.oneOf('lg', 'md', 'full'),
}

Hero.defaultProps = {
  title: 'Novvum Gatsby Starter',
  height: 'md',
  caption:
    'This is a small starter kit to help you kickstart your Gatsby project!',
  image: '/assets/DarkMachine.png',
}

export default Hero

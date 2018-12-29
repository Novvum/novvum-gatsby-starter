import React from 'react'
import { styled, viewport } from '../styled'

const ParallaxContainer = styled.div`
  height: ${p => p.height || '100%'};
  max-height: 1600px;
  flex: 1;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-color: ${p => p.theme.editorColors.dark.editorBackground};
  background-blend-mode: hard-light;
  margin: 0;
  padding: 0;
  border: 0;
  align-items: center;
  &:after,
  &:before {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    left: 0;
    top: 0;
    content: '';
  }
`

export const OverflowSection = styled.div`
  position: relative;
  z-index: 3;
  @media (max-width: 576px) {
    margin-top: -30px;
  }
  @media (max-width: 830px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  margin: -60px 30px 0px;
`

export default class Parallax extends React.Component {
  constructor(props) {
    super(props)
    let windowScrollTop
    if (viewport.innerWidth >= 768) {
      windowScrollTop = viewport.pageYOffset / 3
    } else {
      windowScrollTop = 0
    }

    this.state = {
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
    }
    this.resetTransform = this.resetTransform.bind(this)
  }
  componentDidMount() {
    if (viewport.innerWidth >= 768) {
      var windowScrollTop = viewport.pageYOffset / 3
      this.setState({
        transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
      })
      viewport.addEventListener('scroll', this.resetTransform)
    }
  }
  componentWillUnmount() {
    if (viewport.innerWidth >= 768) {
      viewport.removeEventListener('scroll', this.resetTransform)
    }
  }
  resetTransform() {
    var windowScrollTop = viewport.pageYOffset / 3
    this.setState({
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
    })
  }
  render() {
    const { children, image, height } = this.props
    return (
      <ParallaxContainer
        height={height}
        style={{
          backgroundImage: `url(${image})`,
          ...this.state,
        }}
      >
        {children}
      </ParallaxContainer>
    )
  }
}

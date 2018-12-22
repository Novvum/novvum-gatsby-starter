import { styled } from '../styled'

const Terminal = styled.section`
  border: ${props => props.border || '0.05em solid #000'};
  background: ${props => props.background || '#000'};
  color: white;
  padding: ${props => props.padding || '2.25em .5em .5em .5em'};
  resize: ${(props => props.resize && 'both') || 'none'};
  min-height: ${props => props.minHeight || '11em'};
  min-width: ${props => props.minWidth || '11em'};
  max-height: ${props => props.maxHeight || null};
  max-width: ${props => props.maxWidth || '100%'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '300px'};
  box-shadow: 0 20px 68px rgba(0, 0, 0, 0.55);
  border-radius: 0.5em;
  position: relative;
  overflow: auto;
  z-index: 2;
  &:after {
    top: 0.8em;
    left: 0.8em;
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    z-index: 2;
    border-radius: 50%;
    background: ${props => (props.grayscale ? '#8D8D92' : '#f85955')};
    box-shadow: ${props =>
      props.grayscale
        ? '0 0 0 0.2em #8D8D92,  1.1em 0 0 0.2em #8D8D92, 2.2em 0 0 0.2em #8D8D92'
        : '0 0 0 0.2em #f85955,  1.2em 0 0 0.2em #fbbe3f, 2.3em 0 0 0.2em #45cc4b'};
  }
  &:before {
    height: ${props => props.barHeight || '2em'};
    background: ${props => props.background || '#000'};
    border-bottom: ${props => props.divider || '0.05em solid #000'};
    background: ${props => props.topbarColor || '#000'};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    border-top-left-radius: 0.4em;
    border-top-right-radius: 0.4em;
    background-clip: padding-box;
  }
`

export default Terminal

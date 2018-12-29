import * as styledComponents from 'styled-components'
import { ComponentClass } from 'react'
import { theme } from './theme'

const viewport = typeof window !== 'undefined' && window
const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  withTheme,
  createGlobalStyle,
} = styledComponents

export {
  css,
  keyframes,
  ThemeProvider,
  theme,
  withTheme,
  createGlobalStyle,
  viewport,
}
export default styled

export { ComponentClass }

import * as styledComponents from 'styled-components'
import { ComponentClass } from 'react'
import { theme } from './theme'
import { mobile, phone } from './mobile'
const viewport = typeof window !== 'undefined' && window

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  withTheme,
  createGlobalStyle,
} = styledComponents

const resetInput = css`
  background: none;
  outline: none;
  border: none;
`

export {
  css,
  keyframes,
  ThemeProvider,
  theme,
  withTheme,
  createGlobalStyle,
  viewport,
  mobile,
  phone,
  resetInput,
}
export default styled

export { ComponentClass }

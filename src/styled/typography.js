import Typography from 'typography'
import githubTheme from 'typography-theme-github'
import CodePlugin from 'typography-plugin-code'

githubTheme.plugins = [new CodePlugin()]
export default new Typography(githubTheme)

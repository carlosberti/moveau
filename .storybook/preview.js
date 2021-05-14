import '../.jest/next-image.mock'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import {darkTheme} from 'styles/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]

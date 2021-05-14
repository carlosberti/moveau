import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from 'styles/theme'

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: RenderOptions = {}
) =>
  render(<ThemeProvider theme={darkTheme}>{ui}</ThemeProvider>, renderOptions)

export * from '@testing-library/react'
export { customRender as render }

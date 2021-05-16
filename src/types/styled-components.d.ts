import { darkTheme, lightTheme } from 'styles/theme'

type DarkTheme = typeof darkTheme
type LightTheme = typeof lightTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme, LightTheme {}
}

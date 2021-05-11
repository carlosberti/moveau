import '../.jest/next-image.mock'
import GlobalStyles from 'styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]

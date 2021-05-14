import '../.jest/next-image.mock'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import {darkTheme} from 'styles/theme'
import {useMovieStore} from 'store'

export const decorators = [
  (Story) => {
    const addMovie = useMovieStore(state => state.addMovie)
    addMovie({
      id: '278',
      img: '/assets/img/aladdin.jpeg',
      name: 'Aladdin',
      overview: ',jahsgdf asldjfh adjlsfh asjldfh asldjfh asdhjlf lasjdh',
      video: 'ur9GKLl8v4U'
    })

    return (
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    )
  }
]

import '../.jest/next-image.mock'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import {darkTheme} from 'styles/theme'
import {useMovieStore, useFavouriteStore} from 'store'

export const decorators = [
  (Story) => {
    const addMovie = useMovieStore(state => state.addMovie)
    const setFavourite = useFavouriteStore(state => state.setItems)
    const setIsOpen = useFavouriteStore(state => state.setIsOpen)
    const favourites = [{
      id: 278,
      img: '/assets/img/aladdin.jpeg',
      name: 'Aladdin',
    },{
      id: 280,
      img: '/assets/img/aladdin.jpeg',
      name: 'Aladdin',
    },{
      id: 281,
      img: '/assets/img/aladdin.jpeg',
      name: 'Aladdin',
    },{
      id: 282,
      img: '/assets/img/aladdin.jpeg',
      name: 'Aladdin',
    },{
      id: 283,
      img: '/assets/img/aladdin.jpeg',
      name: 'Aladdin',
    },{
      id: 284,
      img: '/assets/img/aladdin.jpeg',
      name: 'Aladdin',
    },{
      id: 285,
      img: '/assets/img/aladdin.jpeg',
      name: 'Aladdin',
    }]
    addMovie({
      id: 278,
      img: '/assets/img/aladdin.jpeg',
      name: 'Aladdin',
      overview: ',jahsgdf asldjfh adjlsfh asjldfh asldjfh asdhjlf lasjdh',
      video: 'ur9GKLl8v4U'
    })

    favourites.map(favourite => setFavourite(favourite, 'favourites'))
    setIsOpen()


    return (
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    )
  }
]

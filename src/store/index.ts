import create from 'zustand'

export type MoviePopupProps = {
  img: string
  name: string
  overview: string
  video: string | false
  id: string
}

type MovieStore = {
  movie: undefined | MoviePopupProps
  addMovie: (movie: MoviePopupProps) => void
  removeMovie: () => void
}

export const useMovieStore = create<MovieStore>((set) => ({
  movie: undefined,
  addMovie: (movie: MoviePopupProps) => set({ movie }),
  removeMovie: () => set({ movie: undefined })
}))

type Movie = {
  id: string
  name: string
  img: string
}

type FavouriteStore = {
  favourites: [] | Movie[]
  addFavourite: (favourite: Movie) => void
}

export const useFavouriteStore = create<FavouriteStore>((set, get) => ({
  favourites: [],
  addFavourite: (favourite: Movie) => {
    const { favourites } = get()
    set({ favourites: [...favourites, favourite] })
  }
}))

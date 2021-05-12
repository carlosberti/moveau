import create from 'zustand'

import { MoviePopupProps } from 'components/MoviePopup'

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

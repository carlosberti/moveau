import { MovieCardProps } from 'components/MovieCard'
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

export type FavouriteStore = {
  items: undefined | MovieCardProps[]
  isOpen: boolean
  setItems: (favourite: MovieCardProps) => void
  clearItems: () => void
  setIsOpen: () => void
  isItem: (id: string) => boolean
}

export const useFavouriteStore = create<FavouriteStore>((set, get) => ({
  items: undefined,
  isOpen: false,
  setItems: (favourite: MovieCardProps) => {
    const { items, isItem } = get()

    const newFavourites = items
      ? isItem(favourite.id)
        ? items.filter((item) => item.id !== favourite.id)
        : [...items, favourite]
      : [favourite]

    set({ items: [...newFavourites] })
  },
  clearItems: () => set({ items: undefined }),
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  isItem: (id: string): boolean => {
    const { items } = get()

    const isFavourite = items?.find((item) => item.id === id)

    return !!isFavourite
  }
}))

export type WatchLaterStore = {
  items: undefined | MovieCardProps[]
  isOpen: boolean
  setItems: (watchLater: MovieCardProps) => void
  clearItems: () => void
  setIsOpen: () => void
  isItem: (id: string) => boolean
}

export const useWatchLaterStore = create<WatchLaterStore>((set, get) => ({
  items: undefined,
  isOpen: false,
  setItems: (watchLater: MovieCardProps) => {
    const { items, isItem } = get()

    const newWatchLater = items
      ? isItem(watchLater.id)
        ? items.filter((item) => item.id !== watchLater.id)
        : [...items, watchLater]
      : [watchLater]

    set({ items: [...newWatchLater] })
  },
  clearItems: () => set({ items: undefined }),
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  isItem: (id: string): boolean => {
    const { items } = get()

    const isFavourite = items?.find((item) => item.id === id)

    return !!isFavourite
  }
}))

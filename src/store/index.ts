import { MovieCardProps } from 'components/MovieCard'
import { setStorageItem } from 'utils/localStorage'
import create from 'zustand'

type DarkMode = {
  darkMode: boolean
  setDarkMode: () => void
}

export const useDarkMode = create<DarkMode>((set) => ({
  darkMode: true,
  setDarkMode: () => set((state) => ({ darkMode: !state.darkMode }))
}))

export type MoviePopupProps = {
  img: string
  name: string
  overview: string
  video: string | false
  id: number
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

export type Common = {
  items: undefined | MovieCardProps[]
  isOpen: boolean
  setItems: (item: MovieCardProps, key: string) => void
  setItemsFromStorage: (item: MovieCardProps[], key: string) => void
  clearItems: (key: string) => void
  setIsOpen: () => void
  isItem: (id: number) => boolean
}

const storeFactory = () =>
  create<Common>((set, get) => ({
    items: undefined,
    isOpen: false,
    setItems: (newItem: MovieCardProps, key: string) => {
      const { items, isItem } = get()

      const newItems = items
        ? isItem(newItem.id)
          ? items.filter((item) => item.id !== newItem.id)
          : [...items, newItem]
        : [newItem]

      if (newItems.length === 0) {
        setStorageItem(key, [])
        set({ items: undefined })
        return
      }

      setStorageItem(key, [...newItems])
      set({ items: [...newItems] })
    },
    setItemsFromStorage: (newItems: MovieCardProps[], key: string) => {
      setStorageItem(key, [...newItems])
      set({ items: [...newItems] })
    },
    clearItems: (key: string) => {
      setStorageItem(key, [])
      set({ items: undefined })
    },
    setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
    isItem: (id: number): boolean => {
      const { items } = get()

      const isItem = items?.find((item) => item.id === id)

      return !!isItem
    }
  }))

export const useFavouriteStore = storeFactory()

export const useWatchLaterStore = storeFactory()

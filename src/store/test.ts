import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'

import {
  useDarkMode,
  useMovieStore,
  useFavouriteStore,
  useWatchLaterStore
} from '.'

describe('useDarkMode()', () => {
  it('change darkMode value if setDarkMode is called', () => {
    const { result } = renderHook(() => useDarkMode())

    expect(result.current.darkMode).toBeFalsy()

    act(() => result.current.setDarkMode())

    expect(result.current.darkMode).toBeTruthy()
  })
})

describe('useMovieStore()', () => {
  it('should add movie if addmovie is called', () => {
    const { result } = renderHook(() => useMovieStore())

    const movie = {
      id: 1,
      name: 'any_name',
      overview: 'any_overview',
      img: 'any_img',
      video: 'any_video'
    }

    expect(result.current.movie).toBeUndefined()

    act(() => result.current.addMovie(movie))

    expect(result.current.movie).toStrictEqual(movie)
  })

  it('should remove movie if removeMovie is called', () => {
    const { result } = renderHook(() => useMovieStore())

    act(() => result.current.removeMovie())

    expect(result.current.movie).toStrictEqual(undefined)
  })
})

describe('useFavouriteStore()', () => {
  afterEach(() => {
    const store = useFavouriteStore

    act(() => store.getState().clearItems())
  })
  it('should set items if setItems is called', () => {
    const { result } = renderHook(() => useFavouriteStore())

    const movie = {
      id: 1,
      name: 'any_name',
      overview: 'any_overview',
      img: 'any_img'
    }

    expect(result.current.items).toBeUndefined()

    act(() => result.current.setItems(movie))

    expect(result.current.items).toStrictEqual([movie])
  })

  it('should remove item if item is already on array', () => {
    const { result } = renderHook(() => useFavouriteStore())

    const movie = {
      id: 1,
      name: 'any_name',
      overview: 'any_overview',
      img: 'any_img'
    }

    act(() => result.current.setItems(movie))

    expect(result.current.items).toStrictEqual([movie])

    act(() => result.current.setItems(movie))

    expect(result.current.items).toBeUndefined()
  })

  it('should append item if item is already populated', () => {
    const { result } = renderHook(() => useFavouriteStore())

    const movie = {
      id: 1,
      name: 'any_name',
      overview: 'any_overview',
      img: 'any_img'
    }
    const movie2 = {
      id: 2,
      name: 'any_name',
      overview: 'any_overview',
      img: 'any_img'
    }

    act(() => result.current.setItems(movie))

    expect(result.current.items).toStrictEqual([movie])

    act(() => result.current.setItems(movie2))

    expect(result.current.items).toStrictEqual([movie, movie2])
  })

  it('should clear items if clearItems is called', () => {
    const { result } = renderHook(() => useFavouriteStore())

    const movie = {
      id: 1,
      name: 'any_name',
      overview: 'any_overview',
      img: 'any_img'
    }

    act(() => result.current.setItems(movie))

    expect(result.current.items).toStrictEqual([movie])

    act(() => result.current.clearItems())

    expect(result.current.items).toBeUndefined()
  })

  it('should set is Open if setIsOpen is called', () => {
    const { result } = renderHook(() => useFavouriteStore())

    expect(result.current.isOpen).toBeFalsy()

    act(() => result.current.setIsOpen())

    expect(result.current.isOpen).toBeTruthy()
  })
})

describe('useWatchLaterStore()', () => {
  afterEach(() => {
    const store = useWatchLaterStore

    act(() => store.getState().clearItems())
  })
  it('should set items if setItems is called', () => {
    const { result } = renderHook(() => useWatchLaterStore())

    const movie = {
      id: 1,
      name: 'any_name',
      overview: 'any_overview',
      img: 'any_img'
    }

    expect(result.current.items).toBeUndefined()

    act(() => result.current.setItems(movie))

    expect(result.current.items).toStrictEqual([movie])
  })

  it('should remove item if item is already on array', () => {
    const { result } = renderHook(() => useWatchLaterStore())

    const movie = {
      id: 1,
      name: 'any_name',
      overview: 'any_overview',
      img: 'any_img'
    }

    act(() => result.current.setItems(movie))

    expect(result.current.items).toStrictEqual([movie])

    act(() => result.current.setItems(movie))

    expect(result.current.items).toBeUndefined()
  })

  it('should append item if item is already populated', () => {
    const { result } = renderHook(() => useWatchLaterStore())

    const movie = {
      id: 1,
      name: 'any_name',
      overview: 'any_overview',
      img: 'any_img'
    }
    const movie2 = {
      id: 2,
      name: 'any_name',
      overview: 'any_overview',
      img: 'any_img'
    }

    act(() => result.current.setItems(movie))

    expect(result.current.items).toStrictEqual([movie])

    act(() => result.current.setItems(movie2))

    expect(result.current.items).toStrictEqual([movie, movie2])
  })

  it('should clear items if clearItems is called', () => {
    const { result } = renderHook(() => useWatchLaterStore())

    const movie = {
      id: 1,
      name: 'any_name',
      overview: 'any_overview',
      img: 'any_img'
    }

    act(() => result.current.setItems(movie))

    expect(result.current.items).toStrictEqual([movie])

    act(() => result.current.clearItems())

    expect(result.current.items).toBeUndefined()
  })

  it('should set is Open if setIsOpen is called', () => {
    const { result } = renderHook(() => useWatchLaterStore())

    expect(result.current.isOpen).toBeFalsy()

    act(() => result.current.setIsOpen())

    expect(result.current.isOpen).toBeTruthy()
  })
})

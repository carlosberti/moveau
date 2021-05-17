/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return the item from localStorage', () => {
    window.localStorage.setItem('MOVIEAU_favourites', JSON.stringify([movie]))

    expect(getStorageItem('favourites')).toStrictEqual([movie])
  })

  it('should return void if window === undefined', () => {
    const { window } = global

    window.localStorage.setItem('MOVIEAU_favourites', JSON.stringify([movie]))

    //@ts-ignore
    delete global.window

    expect(getStorageItem('favourites')).toBeUndefined()

    global.window = window
  })
})

const movie = {
  id: 1,
  name: 'any_name',
  overview: 'any_overview',
  img: 'any_img'
}
describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should add the item to localStorage', () => {
    setStorageItem('favourites', [movie])

    expect(window.localStorage.getItem('MOVIEAU_favourites')).toStrictEqual(
      JSON.stringify([movie])
    )
  })

  it('should return void if window === undefined', () => {
    const { window } = global

    //@ts-ignore
    delete global.window

    expect(setStorageItem('favourites', [movie])).toBeUndefined()

    global.window = window
  })
})

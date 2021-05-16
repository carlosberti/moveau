import { HomeMoviesResponse, MovieDetailsResponse } from 'client'
import { homeMoviesMapper, movieDetailsMapper } from '.'

describe('homeMoviesMapper()', () => {
  it('should return the right format when mapped', () => {
    const movies: HomeMoviesResponse[] = [
      {
        id: 1,
        poster_path: 'any_path',
        title: 'any_title',
        overview: 'any_overview'
      }
    ]

    expect(homeMoviesMapper(movies)).toStrictEqual([
      {
        id: 1,
        img: 'https://image.tmdb.org/t/p/w300/any_path',
        name: 'any_title',
        overview: 'any_overview'
      }
    ])
  })

  it('should return not-found image when poster_path is not provided', () => {
    const movies = [
      {
        id: 1,
        title: 'any_title',
        overview: 'any_overview'
      }
    ]

    expect(homeMoviesMapper(movies as HomeMoviesResponse[])).toStrictEqual([
      {
        id: 1,
        img: '/assets/img/not-found.jpg',
        name: 'any_title',
        overview: 'any_overview'
      }
    ])
  })
})

describe('movieDetailsMapper()', () => {
  it('should return the right format when mapped', () => {
    const movie: MovieDetailsResponse = {
      title: 'any_title',
      overview: 'any_overview',
      images: [
        {
          path: 'any_path'
        }
      ],
      videos: [
        {
          key: 'any_key',
          type: 'any_type',
          site: 'any_site'
        }
      ],
      watchProviders: ['any_provider'],
      production_companies: [
        {
          name: 'any_company'
        }
      ],
      poster_path: 'any_path'
    }

    expect(movieDetailsMapper({ id: 1, movie })).toStrictEqual({
      id: 1,
      name: 'any_title',
      overview: 'any_overview',
      images: [
        {
          path: 'any_path'
        }
      ],
      videos: [
        {
          key: 'any_key',
          type: 'any_type',
          site: 'any_site'
        }
      ],
      watchProviders: ['any_provider'],
      companies: ['any_company'],
      poster_path: 'https://image.tmdb.org/t/p/w300/any_path'
    })
  })
})

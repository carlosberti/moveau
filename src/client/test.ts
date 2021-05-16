import 'server.mock'

import { getHomeMovies, getVideos, getSearchMovies, getMovieDetails } from '.'

describe('getHomeMovies()', () => {
  it('should getHomeMovies', async () => {
    const response = await getHomeMovies({ page: 1 })

    expect(response).toStrictEqual({
      results: [
        {
          id: 1,
          title: 'req_title',
          poster_path: 'req_poster_path',
          overview: 'req_overview'
        }
      ],
      total_pages: '1'
    })
  })
})

describe('getVideos()', () => {
  it('should getVideos', async () => {
    const response = await getVideos({ id: 1 })

    expect(response).toStrictEqual([
      {
        key: 'req_key',
        site: 'req_site',
        type: 'req_type'
      }
    ])
  })
})

describe('getMovieDetails()', () => {
  it('should getMovieDetails', async () => {
    const response = await getMovieDetails({ id: 1 })

    expect(response).toStrictEqual({
      title: 'req_title',
      overview: 'req_overview',
      images: [
        {
          path: 'req_path'
        }
      ],
      videos: [
        {
          key: 'req_key',
          site: 'req_site',
          type: 'req_type'
        }
      ],
      watchProviders: ['req_provider_name'],
      production_companies: [
        {
          name: 'req_company_name'
        }
      ]
    })
  })
})

describe('getSearchMovies()', () => {
  it('should getSearchMovies', async () => {
    const response = await getSearchMovies({ query: 'any_query', page: 1 })

    expect(response).toStrictEqual({
      results: [
        {
          id: 1,
          title: 'req_title',
          poster_path: 'req_poster_path',
          overview: 'req_overview'
        }
      ],
      total_pages: 3
    })
  })
})

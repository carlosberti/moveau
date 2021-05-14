import { rest } from 'msw'

import { BASE_MOVIE_URL, BASE_SEARCH_URL } from 'client'

export const handlers = [
  rest.get(`${BASE_MOVIE_URL}/popular`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            id: '1',
            title: 'req_title',
            poster_path: 'req_poster_path',
            overview: 'req_overview'
          }
        ]
      })
    )
  }),
  rest.get(`${BASE_MOVIE_URL}/:id/videos`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            key: 'req_key',
            site: 'req_site',
            type: 'req_type'
          }
        ]
      })
    )
  }),
  rest.get(`${BASE_MOVIE_URL}/:id`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: 'req_title',
        overview: 'req_overview'
      })
    )
  }),
  rest.get(`${BASE_MOVIE_URL}/:id/images`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        backdrops: [{ path: 'req_path' }]
      })
    )
  }),
  rest.get(BASE_SEARCH_URL, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            id: '1',
            title: 'req_title',
            poster_path: 'req_poster_path',
            overview: 'req_overview'
          }
        ],
        total_pages: 3
      })
    )
  })
]

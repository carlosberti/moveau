import 'match-media.mock'
import { render, screen } from 'utils/test-utils'

import Movie, { MovieTemplateProps } from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  isFallback: false,
  pathname: 'any-name',
  push: jest.fn()
}))

jest.mock('components/MovieInfos', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock MovieInfos"></div>
    }
  }
})

const props: MovieTemplateProps = {
  id: '1',
  name: 'any_name',
  images: [
    {
      file_path: 'any_path'
    }
  ],
  overview: 'any_overview',
  videos: [{ key: 'any_key', site: 'any_site', type: 'any_type' }],
  companies: ['any_company'],
  watchProviders: ['any_provider']
}

describe('<Movie />', () => {
  it('should render correctly', () => {
    render(<Movie {...props} />)

    expect(
      screen.getByRole('heading', { name: 'any_name' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'any_overview' })
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock MovieInfos')).toHaveLength(2)
  })

  it('should return loading if isFallback is true', () => {
    useRouter.mockImplementation(() => ({
      isFallback: true,
      pathname: 'any-name',
      push: jest.fn()
    }))
    render(<Movie {...props} />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })
})

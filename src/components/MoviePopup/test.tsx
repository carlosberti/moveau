import 'next-image.mock'
import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import MoviePopup from '.'
import { useMovieStore } from 'store'

const movie = {
  id: '1',
  name: 'any_name',
  img: '/any_img',
  overview: 'any_overview',
  video: 'any_video'
}

describe('<MoviePopup />', () => {
  it('should render correctly', () => {
    useMovieStore.setState({ movie: movie })
    render(<MoviePopup />)

    expect(screen.getByRole('img', { name: 'any_name' })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /favourite/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /watch later/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /any_name/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /any_overview/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/any_name trailer/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /go to/i })).toBeInTheDocument()
  })

  it('should change icons color on click', () => {
    render(<MoviePopup />)

    const favouriteButton = screen.getByRole('button', {
      name: /favourite/i
    })
    const watchLaterButton = screen.getByRole('button', {
      name: /watch later/i
    })

    waitFor(() => {
      expect(favouriteButton).toHaveStyle('color: #eee')
      expect(watchLaterButton).toHaveStyle('color: #eee')
    })

    userEvent.click(favouriteButton)
    userEvent.click(watchLaterButton)

    waitFor(() => {
      expect(favouriteButton).toHaveStyle('color: yellow')
      expect(watchLaterButton).toHaveStyle('color: yellow')
    })
  })

  it('should close when overlay is clicked', () => {
    useMovieStore.setState({ movie: undefined })
    render(<MoviePopup />)

    expect(screen.queryByLabelText('Click to close')).not.toBeInTheDocument()

    useMovieStore.setState({ movie: movie })
    const openelement = screen.getByLabelText('Click to close')
    expect(openelement).toBeInTheDocument()
    expect(openelement.getAttribute('aria-hidden')).toBe('false')

    userEvent.click(openelement)

    expect(screen.queryByLabelText('Click to close')).not.toBeInTheDocument()
  })
})

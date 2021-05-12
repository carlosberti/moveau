import 'next-image.mock'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MoviePopup from '.'

const props = {
  id: '1',
  img: 'any_img',
  name: 'any_name',
  overview: 'any_overview',
  video: 'any_video'
}

describe('<MoviePopup />', () => {
  it('should render correctly', () => {
    render(<MoviePopup {...props} />)

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
  })

  it('should change icons color on click', () => {
    render(<MoviePopup {...props} />)

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
})

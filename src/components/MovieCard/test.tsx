import 'server.mock'
import 'next-image.mock'
import { render, screen, waitFor } from 'utils/test-utils'

import MovieCard from '.'
import userEvent from '@testing-library/user-event'

const props = {
  id: '1',
  img: '/any_path',
  name: 'Aladdin',
  overview: 'any_overview'
}

describe('<MovieCard />', () => {
  it('should render correctly', () => {
    render(<MovieCard {...props} />)

    const img = screen.getByRole('img', { name: 'Aladdin' })

    expect(screen.getByLabelText(/click to open/i)).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/any_path')
    expect(screen.getByText(/aladdin/i)).toBeInTheDocument()
  })

  it('should add movie onClick', async () => {
    render(<MovieCard {...props} />)

    const card = screen.getByLabelText(/click to open/i)

    expect(card.getAttribute('tabIndex')).toBe('0')

    userEvent.click(card)

    await waitFor(() => expect(card.getAttribute('tabIndex')).toBe('-1'))
  })
})

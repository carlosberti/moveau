import { render, screen } from '@testing-library/react'

import MovieCard from '.'

const props = {
  img: '/any_path',
  name: 'Aladdin'
}

describe('<MovieCard />', () => {
  it('should render correctly', () => {
    render(<MovieCard {...props} />)

    const img = screen.getByRole('img', { name: 'Aladdin' })

    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/any_path')
    expect(screen.getByText(/aladdin/i)).toBeInTheDocument()
  })
})

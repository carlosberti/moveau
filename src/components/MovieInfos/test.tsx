import { render, screen } from '@testing-library/react'

import MovieInfos from '.'

const props = {
  title: 'any_title',
  items: ['any_item'],
  color: 'white'
}

describe('<MovieInfos />', () => {
  it('should render correctly', () => {
    const { container } = render(<MovieInfos {...props} />)

    expect(screen.getByText(/any_title/i)).toBeInTheDocument()
    expect(screen.getByText(/any_item/i)).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle('color: white')
  })
})

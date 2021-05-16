import { render, screen } from '@testing-library/react'

import MovieInfos from '.'

const props = {
  title: 'any_title',
  items: ['any_item'],
  color: 'white',
  notFoundMessage: 'any_message'
}

describe('<MovieInfos />', () => {
  it('should render correctly', () => {
    const { container } = render(<MovieInfos {...props} />)

    expect(screen.getByText(/any_title/i)).toBeInTheDocument()
    expect(screen.getByText(/any_item/i)).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle('color: white')
  })

  it('should render not found if no items', () => {
    render(<MovieInfos {...props} items={[]} />)

    expect(screen.getByText(/any_message/i)).toBeInTheDocument()
  })
})

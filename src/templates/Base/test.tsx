import { render, screen } from '@testing-library/react'

import Base from '.'

describe('<Base />', () => {
  it('should render correctly', () => {
    render(
      <Base>
        <h1>movieau</h1>
      </Base>
    )

    expect(
      screen.getByRole('heading', { name: /movieau/i })
    ).toBeInTheDocument()
  })
})

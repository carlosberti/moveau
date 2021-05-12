import { render, screen } from '@testing-library/react'

import Base from '.'

describe('<Base />', () => {
  it('should render correctly', () => {
    render(
      <Base>
        <h1>moveau</h1>
      </Base>
    )

    expect(screen.getByRole('heading', { name: /moveau/i })).toBeInTheDocument()
  })
})

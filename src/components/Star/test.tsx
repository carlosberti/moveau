import { render, screen } from '@testing-library/react'

import Star from '.'

describe('<Star />', () => {
  it('should render correctly', () => {
    render(<Star />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})

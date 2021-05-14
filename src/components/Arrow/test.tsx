import { render, screen } from '@testing-library/react'

import Arrow from '.'

describe('<Arrow />', () => {
  it('should render correctly', () => {
    render(<Arrow />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('should hide clock', () => {
    const { container } = render(<Arrow hideClock />)

    expect(container.querySelector('.clock')).toHaveStyle('display: none')
  })
})

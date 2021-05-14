import { render, screen } from '@testing-library/react'

import Arrow from '.'

describe('<Arrow />', () => {
  it('should render correctly', () => {
    render(<Arrow />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should hide clock', () => {
    const { container } = render(<Arrow hideClock />)

    expect(container.querySelector('.clock')).toHaveStyle('display: none')
  })

  it('should have passed label', () => {
    render(<Arrow label="test" />)

    expect(screen.getByRole('button').getAttribute('aria-label')).toBe('test')
  })
})

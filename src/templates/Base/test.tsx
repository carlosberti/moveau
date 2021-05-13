import { render, screen } from '@testing-library/react'

import Base from '.'

jest.mock('components/Logo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Logo"></div>
    }
  }
})

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
    expect(screen.getByTestId('Mock Logo')).toBeInTheDocument()
  })
})

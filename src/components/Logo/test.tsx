import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render correctly', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/movieau/i)).toBeInTheDocument()
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    render(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/movieau/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: 'screen and (max-width: 600px)'
      }
    )
  })
})

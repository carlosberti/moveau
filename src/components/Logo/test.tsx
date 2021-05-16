import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render correctly', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/movieau/i)).toBeInTheDocument()
  })
})

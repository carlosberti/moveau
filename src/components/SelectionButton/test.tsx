import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import SelectionButton from '.'

const props = {
  onClick: jest.fn(),
  buttonText: 'any_text'
}

describe('<SelectionButton />', () => {
  it('should render correctly', () => {
    render(<SelectionButton {...props} />)

    expect(
      screen.getByRole('button', { name: /any_text/i })
    ).toBeInTheDocument()
  })

  it('should call onclick on button click', () => {
    render(<SelectionButton {...props} />)

    const button = screen.getByRole('button', { name: /any_text/i })

    userEvent.click(button)

    expect(props.onClick).toHaveBeenCalled()
  })
})

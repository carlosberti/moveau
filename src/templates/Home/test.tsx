import 'server.mock'
import { act, render, screen, waitFor } from 'utils/test-utils'
import { movies } from 'components/MovieCardsGrid/mocks'

import Home from '.'
import userEvent from '@testing-library/user-event'

jest.mock('components/MovieCardsGrid', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock MovieCardsGrid"></div>
    }
  }
})

describe('<Home />', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  afterAll(() => {
    jest.clearAllTimers()
  })

  it('should render correctly', () => {
    render(<Home movies={movies} pageSize={1} />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByTestId('Mock MovieCardsGrid')).toBeInTheDocument()
  })

  it('should have typed keys on input', async () => {
    render(<Home movies={movies} pageSize={1} />)

    const input = screen.getByRole('textbox')

    act(() => {
      userEvent.type(input, 'test')
      jest.runTimersToTime(2000)
    })

    await waitFor(() => expect(input).toHaveValue('test'))

    act(() => {
      userEvent.clear(input)
      jest.runTimersToTime(2000)
    })

    await waitFor(() => expect(input).toHaveValue(''))
  })
})

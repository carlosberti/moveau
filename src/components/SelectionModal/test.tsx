/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render, screen } from 'utils/test-utils'
import { UseStore } from 'zustand'

import { Common } from 'store'

import SelectionModal from '.'
import userEvent from '@testing-library/user-event'

jest.mock('components/MovieCardsGrid', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock MovieCardsGrid"></div>
    }
  }
})

const setIsOpen = jest.fn()
const clearItems = jest.fn()

//@ts-ignore
const useFavouriteStore: UseStore<Common> = () => ({
  setIsOpen,
  items: [],
  isOpen: true,
  clearItems
})

const props = {
  title: 'any_title',
  buttonText: 'any_text',
  store: useFavouriteStore
}

//@ts-ignore
const useFavouriteStoreNoItems: UseStore<Common> = () => ({
  setIsOpen,
  items: undefined,
  clearItems,
  isOpen: true
})

describe('<SelectionModal />', () => {
  it('should render correctly with items', () => {
    render(<SelectionModal {...props} />)

    expect(
      screen
        .getByLabelText(/click to close/i)
        .parentElement?.parentElement!.getAttribute('aria-hidden')
    ).toBe('false')
    expect(screen.getByLabelText(/close icon/i)).toBeInTheDocument()
    expect(screen.getByTestId('Mock MovieCardsGrid')).toBeInTheDocument()
    expect(screen.getByLabelText(/click to clear items/i)).toBeInTheDocument()
    expect(screen.queryByText(/no items found/i)).not.toBeInTheDocument()
  })

  it('should render not items found if no items', () => {
    render(<SelectionModal {...props} store={useFavouriteStoreNoItems} />)

    expect(screen.getByText(/no items found/i)).toBeInTheDocument()
  })

  it('should call setIsOpen if overlay or close button is clicked', () => {
    render(<SelectionModal {...props} />)

    userEvent.click(screen.getByLabelText(/Click to close/i))

    expect(setIsOpen).toHaveBeenCalledTimes(1)
  })

  it('should call clearItems if clear items button is clicked', () => {
    render(<SelectionModal {...props} />)

    userEvent.click(screen.getByLabelText(/click to clear/i))

    expect(clearItems).toHaveBeenCalledTimes(1)
  })
})

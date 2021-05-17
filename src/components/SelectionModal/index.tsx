import { UseStore } from 'zustand'

import MovieCardsGrid from 'components/MovieCardsGrid'
import type { Common } from 'store'
import * as s from './styles'

export type SelectionModalProps = {
  title: string
  buttonText: string
  storageKey: string
  store: UseStore<Common>
}

const SelectionModal = ({
  title,
  buttonText,
  store,
  storageKey
}: SelectionModalProps) => {
  const item = store()
  return (
    <s.Content isOpen={item.isOpen} aria-hidden={!item.isOpen}>
      <s.TitleWrapper>
        <h3>{title}</h3>
        <button
          onClick={item.setIsOpen}
          title="Click to close"
          aria-label="Click to close"
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17 17"
            aria-label="Close icon"
          >
            <path
              d="M1 1l7.25 7.25 7.25 7.25M15.5 1L8.25 8.25 1 15.5"
              stroke="#F8F8F2"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </s.TitleWrapper>
      {item.items ? (
        <>
          <s.MoviesWrapper>
            <MovieCardsGrid movies={item.items} />
          </s.MoviesWrapper>
          <s.ClearButton
            title="Click to clear items"
            aria-label="Click to clear items"
            onClick={() => item.clearItems(storageKey)}
          >
            {buttonText}
          </s.ClearButton>
        </>
      ) : (
        <s.NotFound>no items found</s.NotFound>
      )}
    </s.Content>
  )
}

export default SelectionModal

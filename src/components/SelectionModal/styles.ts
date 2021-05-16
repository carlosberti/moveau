import styled, { css } from 'styled-components'

import { Wrapper } from 'components/MovieCardsGrid/styles'

export const Content = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    background-color: ${theme.colors.background};
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 95%;
    max-height: 77rem;
    max-width: 32rem;
    padding: 1.6rem 0;
    bottom: 5%;
    right: 5%;
    z-index: 25;
    border: 0.1rem solid;
    border-image: ${theme.colors.purpleCyan};
    box-shadow: 6px 6px 6px 4px rgba(0, 0, 0, 0.75);
    transform: translateX(20%);
    transition: transform 0.3s ease-in-out, opacity 0.4s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    transform: ${isOpen ? 'translateX(0)' : 'translateX(20%)'};
    pointer-events: ${isOpen ? 'all' : 'none'};
  `}
`

export const MoviesWrapper = styled.div`
  margin-top: 0.8rem;
  max-height: 82%;
  overflow: auto;

  ${Wrapper} {
    margin: 1.6rem 1.2rem 0;
  }

  @media screen and (min-width: 1024px) {
    ${Wrapper} {
      grid-column-gap: 1.6rem;
    }
  }
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.6rem;

    > h3 {
      color: ${theme.colors.white};
      font-size: 1.6rem;
      font-weight: 600;
    }

    > button {
      background-color: transparent;
      border: none;
      width: 1.6rem;
      height: 1.6rem;
      cursor: pointer;
    }
  `}
`

export const ClearButton = styled.button`
  ${({ theme }) => css`
    margin: auto auto 0;
    background-color: transparent;
    width: 100%;
    text-align: center;
    max-width: 22.4rem;
    border: 0.1rem solid;
    height: 4.3rem;
    color: ${theme.colors.white};
    border-image: ${theme.colors.border.poster};
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.2s ease;

    &:hover,
    &focus {
      opacity: 0.75;
    }
  `}
`

export const NotFound = styled.div`
  ${({ theme }) => css`
    margin: 6.4rem 1.4rem 0;
    font-size: 3.6rem;
    color: ${theme.colors.white};
  `}
`

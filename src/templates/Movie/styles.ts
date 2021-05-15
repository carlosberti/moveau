import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.main``

export const Content = styled.div`
  margin: 1.6rem auto 0;
  max-width: 67.6rem;
`

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    > div {
      display: flex;
      align-items: center;
    }

    h1,
    > h2 {
      color: ${theme.colors.white};
    }

    h1 {
      font-size: 2.4rem;
    }

    > h2 {
      margin-top: 1.2rem;
      font-size: 1.6rem;
      font-weight: 400;
    }

    @media screen and (min-width: 768px) {
      h1 {
        font-size: 3.6rem;
      }

      > h2 {
        font-size: 2.4rem;
        line-height: 4rem;
      }
    }
  `}
`

type IconsWrapper = {
  watchLater: boolean
  favourite: boolean
}

const iconModiffier = {
  favourite: (theme: DefaultTheme) => css`
    &:first-of-type {
      > div > svg {
        fill: ${theme.colors.purple};
      }
    }
  `,
  watchLater: (theme: DefaultTheme) => css`
    &:last-of-type {
      > div > svg {
        fill: ${theme.colors.purple};
      }
    }
  `
}

export const IconsWrapper = styled.div<IconsWrapper>`
  ${({ theme, favourite, watchLater }) => css`
    display: flex;
    justify-content: space-between;
    margin-left: 1.6rem;

    width: 4rem;

    > button {
      background-color: transparent;
      cursor: pointer;
      color: ${theme.colors.white};
      border: none;

      ${favourite && iconModiffier.favourite(theme)}
      ${watchLater && iconModiffier.watchLater(theme)}

      width: 1.6rem;
      height: 1.6rem;

      &:hover,
      &:focus {
        color: yellow;
      }
    }

    @media screen and (min-width: 768px) {
      width: 8rem;
      margin-left: 2.4rem;

      > button {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  `}
`

export const MovieInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;

  > div {
    & + div {
      margin-top: 3.8rem;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 6rem;

    > div {
      & + div {
        margin: 0;
      }
    }
  }
`

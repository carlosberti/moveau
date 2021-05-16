import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  align-items: baseline;
`

export const Content = styled.button`
  ${({ theme }) => css`
    border: none;
    text-align: left;
    outline: none;
    background: transparent;
    cursor: pointer;
    transition: transform 0.3s ease;
    will-change: transform;

    > p {
      display: -webkit-box;
      transition: color 0.3s ease;
      margin-top: 1.6rem;
      font-size: 1.5rem;
      color: ${theme.colors.posterText.normal};
      will-change: color;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      overflow-wrap: anywhere;
    }

    &:hover,
    &:focus {
      transform: scale(1.1);

      > p {
        color: ${theme.colors.posterText.hover};
      }
    }
  `}
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.white};
    background-image: ${theme.colors.shimmer};
    animation: placeolderShimmer 1s linear infinite forwards;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
    transition: box-shadow 0.3s ease;
    border: 0.1rem solid;
    border-image: ${theme.colors.border.poster};

    &:hover,
    &:focus {
      box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.75);
    }

    @keyframes placeolderShimmer {
      0% {
        background-position: -40rem 0;
      }

      100% {
        background-position: 40rem 0;
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
    justify-content: space-evenly;
    align-self: flex-end;
    margin-top: 1.6rem;

    > button {
      background-color: transparent;
      cursor: pointer;
      color: ${theme.colors.white};
      border: none;

      ${favourite && iconModiffier.favourite(theme)}
      ${watchLater && iconModiffier.watchLater(theme)}

      > div > svg {
        width: 2.4rem;
        height: 2.4rem;
      }

      &:hover,
      &:focus {
        color: yellow;
      }
    }
  `}
`

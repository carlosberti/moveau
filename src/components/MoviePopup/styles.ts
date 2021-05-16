import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    height: 100%;
    width: 100%;
    transition: opacity 0.4s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const Overlay = styled.button`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1.2rem);
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background-color: ${theme.colors.background};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    max-width: 80rem;
    padding: 0.8rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 0.1rem solid;
    border-image: ${theme.colors.border.poster};

    @media screen and (min-width: 500px) {
      padding: 1.6rem;
    }

    @media screen and (min-width: 768px) {
      padding: 2.4rem;
    }
  `}
`

export const TopWrapper = styled.div`
  display: flex;
`

export const LeftWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    > img {
      width: 10rem;
      height: 14.4rem;
      box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.75);
      border: 0.1rem solid;
      border-image: ${theme.colors.border.wallpaper};
    }

    @media screen and (min-width: 500px) {
      > img {
        width: 12rem;
        height: 17.2rem;
      }
    }

    @media screen and (min-width: 768px) {
      > img {
        width: 20rem;
        height: 28.7rem;
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
    align-items: center;
    margin-top: 1.2rem;

    > button {
      background-color: transparent;
      cursor: pointer;
      color: ${theme.colors.white};
      border: none;

      ${favourite && iconModiffier.favourite(theme)}
      ${watchLater && iconModiffier.watchLater(theme)}

      > div > svg {
        width: 1.8rem;
        height: 1.8rem;
      }

      &:hover,
      &:focus {
        color: yellow;
      }
    }

    @media screen and (min-width: 768px) {
      > button > div > svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
    @media screen and (min-width: 1024px) {
      > button > div > svg {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  `}
`

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-left: 1.2rem;
    height: 14.4rem;
    > h2,
    > h3 {
      color: ${theme.colors.white};
    }

    > h3 {
      margin-top: 0.8rem;
      margin-bottom: 1.6rem;
      overflow: auto;
    }

    > button {
      border: 0.1rem solid;
      border-image: ${theme.colors.border.poster};
      align-self: flex-end;
      justify-self: flex-end;
      font-size: 1rem;
      text-align: center;
      background: transparent;
      margin-top: auto;
      width: 100%;
      cursor: pointer;

      > a {
        padding: 0.8rem;
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: ${theme.colors.white};
      }

      &:hover,
      &:focus {
        opacity: 0.8;
      }
    }

    @media screen and (min-width: 500px) {
      height: 17.2rem;
      > h2 {
        font-size: 1.8rem;
      }

      > h3 {
        font-size: 1.4rem;
      }
    }

    @media screen and (min-width: 768px) {
      margin-left: 1.8rem;
      height: 28.7rem;

      > button {
        font-size: 1.6rem;
      }

      > h2 {
        font-size: 2.2rem;
      }

      > h3 {
        font-size: 1.6rem;
      }
    }
  `}
`

export const VideoWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 2.4rem;
    background-image: ${theme.colors.shimmer};
    animation: placeolderShimmer 1s linear infinite forwards;

    > iframe {
      align-self: center;
      width: 100%;
      height: 22rem;
      box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.75);
      border: 0.1rem solid;
      border-image: ${theme.colors.border.wallpaper};
    }

    @media screen and (min-width: 500px) {
      > iframe {
        width: 100%;
        height: 30rem;
      }
    }

    @media screen and (min-width: 768px) {
      > iframe {
        width: 100%;
        height: 40rem;
      }
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

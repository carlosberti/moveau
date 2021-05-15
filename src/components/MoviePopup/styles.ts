import styled, { css, DefaultTheme } from 'styled-components'

export const Overlay = styled.button`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.overlay};
    width: 100%;
    height: 100%;
    backdrop-filter: blur(1.2rem);
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: fixed;
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
    z-index: ${theme.layers.alwaysOnTop};
    border: 0.1rem solid;
    border-image: ${theme.colors.border.poster};

    > iframe {
      margin-top: 2.4rem;
      align-self: center;
      width: 100%;
      height: 22rem;
      box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.75);
      border: 0.1rem solid;
      border-image: ${theme.colors.border.wallpaper};
    }

    @media screen and (min-width: 500px) {
      padding: 1.6rem;
      > iframe {
        width: 100%;
        height: 30rem;
      }
    }

    @media screen and (min-width: 768px) {
      padding: 2.4rem;
      > iframe {
        width: 100%;
        height: 40rem;
      }
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

      width: 1.8rem;
      height: 1.8rem;

      &:hover,
      &:focus {
        color: yellow;
      }
    }

    @media screen and (min-width: 768px) {
      > button {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
    @media screen and (min-width: 1024px) {
      > button {
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
    > h2,
    > h3 {
      color: ${theme.colors.white};
    }

    > h3 {
      margin-top: 0.8rem;
      margin-bottom: 1.6rem;
    }

    > button {
      border: 0.1rem solid;
      border-image: ${theme.colors.border.poster};
      align-self: flex-end;
      justify-self: flex-end;
      font-size: 1rem;
      text-align: center;
      padding: 0.8rem;
      background: transparent;
      margin-top: auto;
      width: 100%;

      > a {
        text-decoration: none;
        color: ${theme.colors.white};
      }

      &:hover,
      &:focus {
        opacity: 0.8;
      }
    }

    @media screen and (min-width: 500px) {
      > h2 {
        font-size: 1.8rem;
      }

      > h3 {
        font-size: 1.4rem;
      }
    }

    @media screen and (min-width: 768px) {
      margin-left: 1.8rem;

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

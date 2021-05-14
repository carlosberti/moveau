import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

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
    border-radius: 1%;
    width: 90%;
    max-width: 80rem;
    padding: 0.8rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: ${theme.layers.alwaysOnTop};

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

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    margin-top: 0.8rem;

    > button {
      background-color: transparent;
      cursor: pointer;
      color: ${theme.colors.white};
      border: none;

      &:hover,
      &:focus {
        color: yellow;

        > svg {
          color: yellow;
        }
      }
    }
  `}
`

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    margin-left: 1.2rem;
    > h2,
    > h3 {
      color: ${theme.colors.white};
    }

    > h3 {
      margin-top: 0.8rem;
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
      > h2 {
        font-size: 2.2rem;
      }

      > h3 {
        font-size: 1.6rem;
      }
    }
  `}
`

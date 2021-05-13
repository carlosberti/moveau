import styled, { css } from 'styled-components'

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

export const Content = styled.div`
  position: absolute;
  background: purple;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1%;
  width: 90%;
  max-width: 80rem;
  padding: 0.8rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  > iframe {
    margin-top: 2.4rem;
    align-self: center;
    width: 100%;
    height: 22rem;
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
`

export const TopWrapper = styled.div`
  display: flex;
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    width: 10rem;
    height: 14.4rem;
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
`

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.8rem;

  > svg {
    &:hover,
    &:focus {
      color: yellow;
    }
  }
`

export const TextWrapper = styled.div`
  margin-left: 1.2rem;
  > h2,
  > h3 {
    color: #fff;
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
    > h2 {
      font-size: 2.2rem;
    }

    > h3 {
      font-size: 1.6rem;
    }
  }
`

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Wrapper = styled.div<{ isOpen?: boolean }>`
  ${({ isOpen }) => css`
    position: relative;

    ${Content},
    ${Overlay} {
      transition: transform 0.2s ease-in, opacity 0.3s ease;
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`

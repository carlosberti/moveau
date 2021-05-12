import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  background: purple;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 80rem;
  border-radius: 1%;
  padding: 0.8rem;

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

export const Content = styled.div`
  display: flex;
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    width: 10rem;
    height: 14.4rem;
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

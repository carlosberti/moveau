import styled, { css, keyframes } from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => css`
    display: block;
    margin: 1.2rem auto;
    width: 80%;
    height: 4.3rem;
    max-width: 40rem;
    line-height: 1;
    font-size: 2.4rem;
    padding: 0.8rem;
    background-color: transparent;
    border: 0.1rem solid;
    border-image: ${theme.colors.border.poster};
    outline: none;
    color: ${theme.colors.posterText.normal};

    &:hover,
    &:focus {
      border-image: ${theme.colors.border.wallpaper};
    }

    @media screen and (min-width: 768px) {
      margin-top: 0;
      height: 5.3rem;
    }
  `}
`

export const MovieCards = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 5.2rem;
`

const spinningAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const LoadingSpinner = styled.div`
  ${({ theme }) => css`
    margin: 6.4rem auto 3.2rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 0.4rem solid ${theme.colors.white};
    border-left-color: #1d1e26;
    animation: ${spinningAnimation} 0.5s linear infinite;
    align-self: center;
  `}
`

import styled, { keyframes } from 'styled-components'

export const MovieCards = styled.main`
  display: flex;
  flex-direction: column;
`

const spinningAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const LoadingSpinner = styled.div`
  margin-top: 6.4rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 0.4rem solid #eee;
  border-left-color: #1d1e26;
  animation: ${spinningAnimation} 0.5s linear infinite;
  align-self: center;
`

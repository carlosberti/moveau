import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const Content = styled.div`
  margin: 1.6rem auto 0;
  max-width: 67.6rem;
`

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    > h1,
    > h2 {
      color: ${theme.colors.white};
    }

    > h1 {
      font-size: 2.4rem;
    }

    > h2 {
      margin-top: 1.2rem;
      font-size: 1.6rem;
      font-weight: 500;
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

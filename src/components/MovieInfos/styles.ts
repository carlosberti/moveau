import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ color: string }>`
  ${({ color }) => css`
    width: fit-content;
    color: ${color};

    > p {
      font-weight: 600;
      font-size: 2.4rem;
    }

    > ul {
      margin-left: 3rem;
    }

    li {
      font-weight: 500;
      font-size: 1.8rem;
    }
  `}
`

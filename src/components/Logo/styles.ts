import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 15rem;
    height: 3.4rem;

    > svg {
      height: unset;
    }

    .screen {
      stroke: ${theme.colors.white};
    }

    .text {
      stroke: ${theme.colors.white};
      fill: ${theme.colors.white};
    }
  `}
`

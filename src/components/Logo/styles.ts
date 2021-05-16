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

    .dot {
      animation: bounce 2s infinite forwards;
      transform-origin: bottom;

      @keyframes bounce {
        0% {
          transform: translateY(0);
        }
        30% {
          transform: translateY(-0.2rem);
        }
        45% {
          transform: translateY(0);
        }
        75% {
          transform: translateY(-0.1rem);
        }
        100% {
          transform: translateY(0);
        }
      }
    }
  `}
`

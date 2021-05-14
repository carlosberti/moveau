import styled, { css } from 'styled-components'
import { ArrowProps } from '.'

export const Wrapper = styled.div<ArrowProps>`
  ${({ hideClock }) => css`
    display: flex;
    width: 3.2rem;
    height: 3.2rem;

    .clock {
      display: ${hideClock ? 'none' : 'block'};
    }
  `}
`

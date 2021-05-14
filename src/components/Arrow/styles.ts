import styled, { css } from 'styled-components'
import { ArrowProps } from '.'

export const Wrapper = styled.div<ArrowProps>`
  ${({ hideClock }) => css`
    display: flex;

    .clock {
      display: ${hideClock ? 'none' : 'block'};
    }
  `}
`

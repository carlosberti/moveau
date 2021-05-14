import styled, { css } from 'styled-components'
import { ArrowProps } from '.'

export const Wrapper = styled.div<ArrowProps>`
  ${({ theme, hideClock, fill }) => css`
    display: flex;

    > svg {
      fill: ${fill ? theme.colors.purple : 'none'};
    }

    .clock {
      display: ${hideClock ? 'none' : 'block'};
    }
  `}
`

import styled, { css } from 'styled-components'
import { StarProps } from '.'

export const Wrapper = styled.div<StarProps>`
  ${({ theme, fill }) => css`
    display: flex;
    > svg {
      fill: ${fill ? theme.colors.purple : 'none'};
    }
  `}
`

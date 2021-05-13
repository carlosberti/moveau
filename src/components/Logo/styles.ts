import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifiers = {
  hideOnMobile: () => css`
    @media screen and (max-width: 600px) {
      width: 5.8rem;
      height: 4.5rem;
      > svg {
        height: 4.5rem;
        pointer-events: none;
      }
      .text {
        display: none;
      }
    }
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ hideOnMobile }) => css`
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`

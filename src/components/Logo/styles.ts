import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifiers = {
  hideOnMobile: () => css`
    @media screen and (max-width: 600px) {
      width: 4.2rem;
      height: 3.8rem;
      > svg {
        height: 3.8rem;
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
    width: 15rem;

    > svg {
      height: unset;
    }

    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`

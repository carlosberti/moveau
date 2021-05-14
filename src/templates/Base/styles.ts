import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    padding: 1.8rem 0;
    position: sticky;
    background-color: ${theme.colors.background};
    z-index: ${theme.layers.base};
    top: 0;

    @media screen and (min-width: 768px) {
      padding: 2.4rem 0;
    }

    @media screen and (min-width: 1024px) {
      padding: 2.8rem 0;
    }
  `}
`

export const LogoWrapper = styled.div`
  width: 16rem;
`

export const Content = styled.div`
  margin-top: 1.6rem;
`

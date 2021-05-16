import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding-bottom: 1.8rem;

  @media screen and (min-width: 768px) {
    padding-bottom: 2.4rem;
  }
`

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    padding: 1.8rem 0;
    position: sticky;
    background-color: ${theme.colors.background};
    z-index: ${theme.layers.base};
    top: 0;

    > div {
      display: flex;
      align-items: center;
    }

    @media screen and (min-width: 768px) {
      padding: 2.4rem 0;
    }
  `}
`

export const THMDBLogo = styled.svg`
  width: 3.2rem;
  margin-left: 2.4rem;
`

export const LogoWrapper = styled.a`
  display: inline-block;
`

export const Content = styled.div`
  margin-top: 1.6rem;
`

export const FloatButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 7.5rem;
    position: fixed;
    bottom: 10%;
    right: 5%;
    z-index: ${theme.layers.base};
  `}
`

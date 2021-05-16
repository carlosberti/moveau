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

      > input {
        appearance: none;
        width: 4rem;
        height: 1.6rem;
        display: inline-block;
        margin-left: auto;
        position: relative;
        border-radius: 5rem;
        overflow: hidden;
        border: none;
        cursor: pointer;
        background-color: ${theme.colors.white};
        transition: background-color ease 0.3s;

        &:before {
          content: '';
          display: block;
          position: absolute;
          width: 1.4rem;
          height: 1.4rem;
          background: ${theme.colors.background};
          left: 0.2rem;
          top: 0.1rem;
          border-radius: 50%;
          transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
        }

        &:checked {
          background-color: ${theme.colors.white};
        }

        &:checked:before {
          background: ${theme.colors.background};
          left: 2.5rem;
        }
      }
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

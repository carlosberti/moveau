import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const Header = styled.header`
  width: 100%;
  padding-top: 1.8rem;

  @media screen and (min-width: 768px) {
    padding-top: 2.4rem;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 3.6rem;
  }
`

export const LogoWrapper = styled.div`
  width: 16rem;
`

export const Content = styled.div`
  margin-top: 6.4rem;
  flex: 1 0 auto;
`

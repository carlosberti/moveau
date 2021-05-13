import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  gap: 1.6rem;
  overflow-x: scroll;
  padding: 2.4rem 0 2.4rem 1.2rem;
  margin-left: -1.2rem;

  @media screen and (min-width: 768px) {
    padding-left: 2.4rem;
    margin-left: -2.4rem;
  }

  @media screen and (min-width: 1168px) {
    padding-left: 3.2rem;
    margin-left: -3.2rem;
  }
  /* -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  } */
`

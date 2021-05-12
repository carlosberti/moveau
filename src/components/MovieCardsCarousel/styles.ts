import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  gap: 1.6rem;
  overflow: scroll;
  padding: 2.4rem 0 2.4rem 2.4rem;
  /* -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  } */

  > button:last-of-type {
    padding-right: 2.4rem;
  }
`

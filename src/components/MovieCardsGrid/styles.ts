import styled from 'styled-components'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 13.1rem);
  grid-column-gap: 1.6rem;
  grid-row-gap: 2.4rem;
  align-items: start;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    grid-column-gap: 5rem;
  }
`

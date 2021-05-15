import styled from 'styled-components'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 13.1rem);
  grid-column-gap: 1.6rem;
  grid-row-gap: 2.4rem;
  justify-content: space-evenly;

  @media screen and (min-width: 1024px) {
    grid-column-gap: 5rem;
  }
`

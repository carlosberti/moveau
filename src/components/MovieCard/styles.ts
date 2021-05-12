import styled from 'styled-components'

export const Wrapper = styled.button`
  border: none;
  text-align: left;
  outline: none;
  background: transparent;
  cursor: pointer;
  width: fit-content;
  transition: transform 0.3s ease;
  will-change: transform;

  > img {
    border: 0.1rem solid #606a6b;
    transition: all 0.3s ease;
    will-change: border, box-shadow;
    box-shadow: none;
  }

  > p {
    transition: color 0.3s ease;
    margin-top: 1.6rem;
    font-size: 1.6rem;
    color: #606a6b;
    will-change: color;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);

    > img {
      border: 0.1rem solid #ffffff;
      box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.75);
    }

    > p {
      color: #ffffff;
    }
  }
`

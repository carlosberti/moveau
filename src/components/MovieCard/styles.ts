import styled from 'styled-components'

export const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  text-align: left;
  outline: none;
  background: transparent;
  cursor: pointer;
  transition: transform 0.3s ease;
  will-change: transform;
  min-width: fit-content;

  > img {
    border: 0.1rem solid #606a6b;
    transition: all 0.3s ease;
    will-change: border, box-shadow;
    box-shadow: none;
  }

  > p {
    display: -webkit-box;
    transition: color 0.3s ease;
    margin-top: 1.6rem;
    font-size: 1.6rem;
    color: #606a6b;
    will-change: color;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-width: fit-content;
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

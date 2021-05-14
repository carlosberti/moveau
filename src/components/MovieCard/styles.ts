import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    border: none;
    text-align: left;
    outline: none;
    background: transparent;
    cursor: pointer;
    transition: transform 0.3s ease;
    /* min-width: fit-content; */

    > p {
      display: -webkit-box;
      transition: color 0.3s ease;
      margin-top: 1.6rem;
      font-size: 1.5rem;
      color: ${theme.colors.posterText.normal};
      will-change: color;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      /* max-width: fit-content; */
    }

    &:hover,
    &:focus {
      transform: scale(1.1);

      > p {
        color: ${theme.colors.posterText.hover};
      }
    }
  `}
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.white};
    background-image: ${theme.colors.shimmer};
    height: max-content;
    animation: placeolderShimmer 3s linear infinite forwards;
    will-change: background-position;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
    transition: box-shadow 0.3s ease;
    border-width: 0.1rem 0.1rem 0.1rem 0.1rem;
    border-style: solid;
    border-image: ${theme.colors.border.poster};

    > img {
      /* transition: border 0.3s ease; */
    }

    &:hover,
    &:focus {
      > img {
        /* border: 0.1rem solid #ffffff; */
      }
      box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.75);
    }

    @keyframes placeolderShimmer {
      0% {
        background-position: -40rem 0;
      }

      100% {
        background-position: 40rem 0;
      }
    }
  `}
`

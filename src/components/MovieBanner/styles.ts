import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 67.6rem;
    margin: 0px auto;
    background-image: ${theme.colors.shimmer};
    animation: placeolderShimmer 3s linear infinite forwards;

    > div {
      position: relative;
      overflow: hidden;
      height: 0;
      padding-bottom: 56.25%;
    }

    > div {
      > img,
      > iframe {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
      }
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

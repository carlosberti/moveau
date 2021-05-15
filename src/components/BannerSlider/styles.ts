import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: 67.6rem;
    margin: 0 auto;
    padding: 0 auto;

    .slick-list {
      border: 0.1rem solid;
      border-image: ${theme.colors.border.wallpaper};
    }

    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;

      li {
        background-color: transparent;
        border: 0.05rem solid;
        border-image: ${theme.colors.border.wallpaper};
        width: 1rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0.2rem;
        cursor: pointer;

        &.slick-active {
          background-color: purple;
        }
      }

      button {
        opacity: 0;
        width: 1rem;
        height: 1rem;
        cursor: pointer;
      }
    }

    .slick-prev,
    .slick-next {
      color: white;
      cursor: pointer;
      position: absolute;
      width: 3.2rem;
      height: 3.2rem;
      top: 50%;
      padding: 0;
    }

    .slick-prev {
      left: -8%;
      transform: translateY(calc(-50% - 22px)) rotate(180deg);
    }

    .slick-next {
      right: -8%;
      transform: translateY(calc(-50% - 22px));
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    @media screen and (min-width: 768px) {
      .slick-dots {
        margin-top: 1.2rem;

        li {
          width: 1.2rem;
          height: 1.2rem;
        }

        button {
          width: 1.2rem;
          height: 1.2rem;
        }
      }
    }
  `}
`

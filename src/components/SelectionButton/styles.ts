import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    border: none;
    border: 0.1rem solid;
    border-image: ${theme.colors.border.wallpaper};
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1;
    width: 8.8rem;
    height: 3.2rem;
    color: ${theme.colors.white};
    transition: background-color 0.2s ease;

    &:hover,
    &:focus {
      background-color: ${theme.colors.orange};
    }
  `}
`

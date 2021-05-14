import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 67.6rem;
  margin: 0px auto;

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
`

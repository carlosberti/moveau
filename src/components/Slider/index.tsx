import SlickSlider from 'react-slick'

import * as s from './styles'

type SliderProps = {
  children: React.ReactNode
}

const Slider = ({ children }: SliderProps) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <s.Wrapper>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </s.Wrapper>
  )
}
export default Slider

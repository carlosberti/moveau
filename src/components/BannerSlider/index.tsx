// import Arrow from 'components/Arrow'
import Arrow from 'components/Arrow'
import MovieBanner from 'components/MovieBanner'
import Slider, { SliderSettings } from 'components/Slider'
import Image from 'next/image'
import * as s from './styles'

export type BannerSliderProps = {
  name: string
  path: string[]
}

const BannerSlider = ({ name, path }: BannerSliderProps) => {
  const settings: SliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ],
    nextArrow: <Arrow hideClock aria-label="next content" />,
    prevArrow: <Arrow hideClock aria-label="previous content" />
  }

  return (
    <s.Wrapper>
      <Slider settings={settings}>
        {path.length > 0 ? (
          path.map((path, index) => (
            <MovieBanner key={`${path} - ${index}`} name={name} path={path} />
          ))
        ) : (
          <Image
            src="/assets/img/not-found.jpg"
            width={676}
            height={387}
            alt="image not found"
          />
        )}
      </Slider>
    </s.Wrapper>
  )
}
export default BannerSlider

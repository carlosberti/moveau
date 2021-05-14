import { Story, Meta } from '@storybook/react/types-6-0'
import MovieBanner from 'components/MovieBanner'
import Slider from '.'

export default {
  title: 'Slider',
  component: Slider,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => (
  <Slider>
    <MovieBanner
      name="Aladdin"
      path="https://image.tmdb.org/t/p/original/RA2FjGBj1zMEEblkcXkpTthXzK.jpg"
    />
    <MovieBanner
      name="Aladdin"
      path="https://image.tmdb.org/t/p/original/RA2FjGBj1zMEEblkcXkpTthXzK.jpg"
    />
    <MovieBanner
      name="Aladdin"
      path="https://image.tmdb.org/t/p/original/RA2FjGBj1zMEEblkcXkpTthXzK.jpg"
    />
    <MovieBanner name="Aladdin" path="K_tLp7T6U1c" />
    <MovieBanner name="Aladdin" path="K_tLp7T6U1c" />
    <MovieBanner name="Aladdin" path="K_tLp7T6U1c" />
  </Slider>
)

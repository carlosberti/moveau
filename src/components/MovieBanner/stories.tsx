import { Story, Meta } from '@storybook/react/types-6-0'
import MovieBanner, { MovieBannerProps } from '.'

export default {
  title: 'MovieBanner',
  component: MovieBanner,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    name: 'Aladdin'
  }
} as Meta

export const Image: Story<MovieBannerProps> = (args) => (
  <MovieBanner {...args} />
)

Image.args = {
  path: 'https://image.tmdb.org/t/p/original/RA2FjGBj1zMEEblkcXkpTthXzK.jpg'
}

export const Video: Story<MovieBannerProps> = (args) => (
  <MovieBanner {...args} />
)

Video.args = {
  path: 'K_tLp7T6U1c'
}

import { Story, Meta } from '@storybook/react/types-6-0'
import BannerSlider, { BannerSliderProps } from '.'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    name: 'Aladdin',
    path: [
      'https://image.tmdb.org/t/p/original/RA2FjGBj1zMEEblkcXkpTthXzK.jpg',
      'K_tLp7T6U1c'
    ]
  }
} as Meta

export const Default: Story<BannerSliderProps> = (args) => (
  <BannerSlider {...args} />
)

import { Story, Meta } from '@storybook/react/types-6-0'
import MoviePopup from '.'

export default {
  title: 'MoviePopup',
  component: MoviePopup,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <MoviePopup />

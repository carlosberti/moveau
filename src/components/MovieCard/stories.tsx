import { Story, Meta } from '@storybook/react/types-6-0'
import MovieCard, { MovieCardProps } from '.'

export default {
  title: 'MovieCard',
  component: MovieCard,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    id: '278',
    img: '/assets/img/aladdin.jpeg',
    name: 'Aladdin'
  }
} as Meta

export const Default: Story<MovieCardProps> = (args) => (
  <div style={{ maxWidth: '50rem', margin: '3rem auto' }}>
    <MovieCard {...args} />
  </div>
)

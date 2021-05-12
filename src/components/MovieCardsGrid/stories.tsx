import { Story, Meta } from '@storybook/react/types-6-0'
import MovieCardsGrid, { MovieCardsGridProps } from '.'
import { movies } from './mocks'

export default {
  title: 'MovieCardsGrid',
  component: MovieCardsGrid,
  parameters: {
    layout: 'fullscreen',
    background: {
      default: 'dark'
    }
  },
  args: {
    movies
  }
} as Meta

export const Default: Story<MovieCardsGridProps> = (args) => (
  <div style={{ maxWidth: '120rem', margin: '8rem auto' }}>
    <MovieCardsGrid {...args} />
  </div>
)

import { Story, Meta } from '@storybook/react/types-6-0'
import MovieInfos, { MovieInfosProps } from '.'

export default {
  title: 'MovieInfos',
  component: MovieInfos,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    title: 'you can watch on',
    items: [
      'Apple iTunes',
      'Microsoft Store',
      'Google Play Movies',
      'Rakuten TV',
      'Viaplay'
    ],
    color: 'white',
    notFoundMessage: 'not found'
  }
} as Meta

export const Default: Story<MovieInfosProps> = (args) => (
  <MovieInfos {...args} />
)

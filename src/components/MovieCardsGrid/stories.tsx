import { Story, Meta } from '@storybook/react/types-6-0'
import MovieCardsGrid, { MovieCardsGridProps } from '.'

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
    movies: [
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin asdkfbkasjldf lsahdf asjdhf asj '
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      },
      {
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin'
      }
    ]
  }
} as Meta

export const Default: Story<MovieCardsGridProps> = (args) => (
  <div style={{ maxWidth: '120rem', margin: '8rem auto' }}>
    <MovieCardsGrid {...args} />
  </div>
)

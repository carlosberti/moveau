import { Story, Meta } from '@storybook/react/types-6-0'
import MovieCardsCarousel, { MovieCardsCarouselProps } from '.'

export default {
  title: 'MovieCardsCarousel',
  component: MovieCardsCarousel,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    movies: [
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

export const Default: Story<MovieCardsCarouselProps> = (args) => (
  <div style={{ maxWidth: '120rem', margin: '30rem auto' }}>
    <MovieCardsCarousel {...args} />
  </div>
)

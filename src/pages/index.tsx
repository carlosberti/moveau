import { Container } from 'components/Container'
import MovieCardsCarousel from 'components/MovieCardsCarousel'
import MovieCardsGrid from 'components/MovieCardsGrid'

const props = {
  movies: [
    {
      img: '/assets/img/aladdin.jpeg',
      name: 'Aladdin s.dkjf jasdf ljasd flajsdhf jklasd fjkalsdhf asnkdf aksjldf lasjkdf jkasd fklasdf aljsd '
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

export default function Home() {
  return (
    <Container>
      <MovieCardsGrid {...props} />
      <MovieCardsCarousel {...props} />
    </Container>
  )
}

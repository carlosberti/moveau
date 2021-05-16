import 'match-media.mock'
import 'next-image.mock'
import { render, screen } from 'utils/test-utils'

import BannerSlider from '.'

const props = {
  name: 'Aladdin',
  path: [
    'https://image.tmdb.org/t/p/original/RA2FjGBj1zMEEblkcXkpTthXzK.jpg',
    'https://image.tmdb.org/t/p/original/RA2FjGBj1zMEEblkcXkpTthXzK.jpg'
  ]
}

describe('<BannerSlider />', () => {
  it('should render correctly', () => {
    const { container } = render(<BannerSlider {...props} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelector('.slick-arrow')).toBeInTheDocument()
    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('img', { name: /aladdin/i, hidden: false })
    ).toBeInTheDocument()
  })

  it('should render not foud img if no path is passed', () => {
    render(<BannerSlider name="any_name" path={[]} />)

    expect(
      screen.getByRole('img', { name: /image not found/i, hidden: false })
    ).toHaveAttribute('src', '/assets/img/not-found.jpg')
  })
})

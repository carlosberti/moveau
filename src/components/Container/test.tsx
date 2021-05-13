import { render, screen } from '@testing-library/react'
import { Container } from '.'

describe('<Container />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Container>
        <span>movieau</span>
      </Container>
    )

    expect(screen.getByText(/movieau/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 138rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: 2rem;
        padding-right: 2rem;
      }

      @media screen and (min-width:768px) {
        .c0 {
          padding-left: 2.4rem;
          padding-right: 2.4rem;
        }
      }

      @media screen and (min-width:1168px) {
        .c0 {
          padding-left: 3.2rem;
          padding-right: 3.2rem;
        }
      }

      <div
        class="c0"
      >
        <span>
          movieau
        </span>
      </div>
    `)
  })
})

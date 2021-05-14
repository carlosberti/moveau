import Image from 'next/image'
import * as s from './styles'

export type MovieBannerProps = {
  path: string
  name: string
}

const MovieBanner = ({ path, name }: MovieBannerProps) => {
  const isImg = () => path.match(/\.(?:png|jpe?g|gif|svg|webp)$/gi)

  return (
    <s.Wrapper>
      <div>
        {isImg() ? (
          <Image src={path} width={676} height={380} alt={name} />
        ) : (
          <iframe
            width="676"
            height="380"
            src={`https://www.youtube.com/embed/${path}`}
            title="Movie video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            aria-label={name}
          ></iframe>
        )}
      </div>
    </s.Wrapper>
  )
}
export default MovieBanner

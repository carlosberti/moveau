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
      {isImg() ? (
        <Image src={path} width={1000} height={562} alt={name} />
      ) : (
        <iframe
          width="1000"
          height="562"
          src={`https://www.youtube.com/embed/${path}`}
          title="Movie video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          aria-label={name}
        ></iframe>
      )}
    </s.Wrapper>
  )
}
export default MovieBanner

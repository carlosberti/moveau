// import Image from 'next/image'

import * as s from './styles'

export type MovieCardProps = {
  img: string
  name: string
  width?: number
  height?: number
}

const MovieCard = ({
  img,
  name,
  width = 187,
  height = 268
}: MovieCardProps) => (
  <s.Wrapper>
    <img src={img} alt={name} width={width} height={height} />
    <p>{name}</p>
  </s.Wrapper>
)
export default MovieCard

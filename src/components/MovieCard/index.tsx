import Image from 'next/image'

import * as s from './styles'

export type MovieCardProps = {
  id: string
  img: string
  name: string
  width?: number
  height?: number
}

const MovieCard = ({
  id,
  img,
  name,
  width = 131,
  height = 188
}: MovieCardProps) => {
  console.log(id)

  return (
    <s.Wrapper>
      <Image src={img} alt={name} width={width} height={height} />
      <p>{name}</p>
    </s.Wrapper>
  )
}

export default MovieCard

import * as s from './styles'

export type MovieInfosProps = {
  title: string
  items: string[]
  color: string
}

const MovieInfos = ({ title, items, color }: MovieInfosProps) => (
  <s.Wrapper color={color}>
    <p>{title}</p>
    <ul>
      {items.map((provider) => (
        <li key={provider}>{provider}</li>
      ))}
    </ul>
  </s.Wrapper>
)
export default MovieInfos

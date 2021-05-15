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
      {items.length > 0 ? (
        items.map((provider) => <li key={provider}>{provider}</li>)
      ) : (
        <li key={1}>players not found</li>
      )}
    </ul>
  </s.Wrapper>
)
export default MovieInfos

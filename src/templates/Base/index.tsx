import * as s from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <s.Wrapper>
    <s.Content>{children}</s.Content>
  </s.Wrapper>
)
export default Base

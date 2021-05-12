import { Container } from 'components/Container'
import * as s from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <s.Wrapper>
    <s.Header>
      <Container>movieau</Container>
    </s.Header>
    <s.Content>{children}</s.Content>
  </s.Wrapper>
)
export default Base

import { Container } from 'components/Container'
import Logo from 'components/Logo'
import Link from 'next/link'
import * as s from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <s.Wrapper>
    <s.Header>
      <Container>
        <Link href="/" passHref>
          <s.LogoWrapper>
            <Logo hideOnMobile />
          </s.LogoWrapper>
        </Link>
      </Container>
    </s.Header>
    <s.Content>{children}</s.Content>
  </s.Wrapper>
)
export default Base

import logoImage from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImage} alt="dt money logo" />

        <button type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}
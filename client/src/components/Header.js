import { Container } from './layout';
import logoSrc from '../images/main_logo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled.img`
  max-width: 250px;
`;

const HeaderContainer = styled(Container)`
  padding: 16px 0 54px 0;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={logoSrc} alt="Lightning Jobs" />
      </Link>
    </HeaderContainer>
  );
}

export default Header;

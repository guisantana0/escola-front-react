import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Header() {
  return (
      <Container>
          <Link to={`/escolas`}>
            Escola.com
          </Link>
      </Container>
  );
}

export default Header;
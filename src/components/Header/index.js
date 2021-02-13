import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Margem } from './styles';

function Header() {
  return (<>
    <Margem/>
      <Container>
          <Link to={`/`}>
            Escola.com
          </Link>
      </Container>
    </>
  );
}

export default Header;
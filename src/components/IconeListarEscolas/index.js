import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function IconeListarEscolas() {
  return (
    <Link to="/escolas/">
        <Container>
            Listar Escolas
        </Container>
    </Link>
  );
}

export default IconeListarEscolas;
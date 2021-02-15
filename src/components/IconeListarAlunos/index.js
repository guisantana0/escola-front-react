import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function IconeListarAlunos () {
  return (
    <Link to="/alunos">
        <Container>
            Listar Alunos
        </Container>
      </Link>
  );
}

export default IconeListarAlunos;
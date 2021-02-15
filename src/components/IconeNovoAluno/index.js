import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const IconeNovoAluno = () => {
  return (
      <Container>
        <Link to="/aluno/manter/">
            + Cadastrar um novo aluno
        </Link>
      </Container>
  );
}

export default IconeNovoAluno;
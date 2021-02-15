import React from 'react';
import {Link} from 'react-router-dom';
import { Container,NivelAno } from './styles';

function TurmaEscola({dados, children, ...resto}) {
  return (
    <>
      <Container>
        <Link to={`/turma/${dados.id}`}>
          <NivelAno>
            <span>
              {dados.serie}ª Série do {dados.nivel_ensino}
            </span>
            <small>{dados.ano}</small>
          </NivelAno>
          <div>{dados.turno}</div>
        </Link>
        {children}
      </Container>
    </>
  );
}

export default TurmaEscola;
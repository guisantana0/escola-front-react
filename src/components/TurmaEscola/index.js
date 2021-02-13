import React from 'react';
import {Link} from 'react-router-dom';
import { Container,NivelAno } from './styles';

function TurmaEscola({dados, ...resto}) {
  return (<>
  
    <Container>
    <Link to={`/turma/${dados.id}`} exact>
      <NivelAno>
          <span>
            {dados.serie}ª Série do {dados.nivel_ensino}
          </span>
          <small>
            {dados.ano}
          </small> 
      </NivelAno>
        <div>
          {dados.turno}
        </div>  
      </Link>
    </Container>
  
  </>);
}

export default TurmaEscola;
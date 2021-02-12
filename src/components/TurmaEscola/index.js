import React from 'react';
import {Link} from 'react-router-dom';
import { Container,NivelAno } from './styles';

function TurmaEscola({dados, ...resto}) {
  return (<>
    <Container>
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
            
    </Container>
  </>);
}

export default TurmaEscola;
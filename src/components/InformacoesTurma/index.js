import React from 'react';

import { Container } from './styles';

const InformacoesTurma = ({dados}) => {
  return (<Container>
    <div>
        {dados.serie} ª do Ensino {dados.nivel_ensino} de {dados.ano}
    </div>
    
  </Container>);
}

export default InformacoesTurma;
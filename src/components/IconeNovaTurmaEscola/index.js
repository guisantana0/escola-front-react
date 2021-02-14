import React from 'react';

import {Link} from 'react-router-dom';
import {Container} from './styles';

const IconeNovaTurmaEscola = ({id}) => {

    return (
    <Container>
        <Link to={`/escola/${id}/nova-turma`}>
        + Adicionar nova turma
        </Link>
        
    </Container>);
}

export default IconeNovaTurmaEscola;
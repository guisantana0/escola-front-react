import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {Container} from './styles';

const IconeNovoAlunoNaTurma = ({dados}) => {
    return (
        <Container>
            <Link to={`/turma/${dados?.id}/novo-aluno`}>
                + Adicionar Novo Aluno
            </Link>
        </Container>);
}

export default IconeNovoAlunoNaTurma
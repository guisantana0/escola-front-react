import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Titulo, Endereco } from './styles';

const IconeEscola = ({dados,...props}) => {
    return (
        <Container>
            <Link to={`escolas/${dados.id}`}>
                <Titulo>
                    {dados.nome}
                </Titulo>
                <Endereco>
                    {dados.endereco}
                </Endereco>
            </Link>
        </Container>
    );
}

export default IconeEscola;
import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Titulo, Endereco,Plus } from './styles';

const IconeNovaEscola = ({dados,...props}) => {
    return (
        <Container>
            <Link to={`escola/manter`}>
                
                <Titulo>
                <Plus>+</Plus>
                     Adicionar nova escola
                </Titulo>
                <Endereco>
                   
                </Endereco>
            </Link>
        </Container>
    );
}

export default IconeNovaEscola;
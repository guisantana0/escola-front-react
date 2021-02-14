import React from 'react';
import { Link } from 'react-router-dom';

import {Container} from './styles';

const Navegacao = ({caminhos}) => {
    return (<Container>
        {
            caminhos.map( (caminho) => <Link key={caminho.rota} to={caminho.rota}><span>{caminho.nome}</span></Link>)
        }    

    </Container>);
};  

export default Navegacao;
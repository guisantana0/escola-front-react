import React from 'react';

import {InformacoesEstilo,NomeEscola} from './styles';

const InformacoesEscola = ({dados, ...rest}) => {
    return (<InformacoesEstilo>
        <NomeEscola>
            {dados.nome}
        </NomeEscola>
        <div>
            Endereço:  
            {dados.endereco}
        </div>
    </InformacoesEstilo>)
}

export default InformacoesEscola;
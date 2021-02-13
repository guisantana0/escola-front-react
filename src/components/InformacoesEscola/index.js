import React from 'react';

import {InformacoesEstilo,NomeEscola,EnderecoEscola} from './styles';

const InformacoesEscola = ({dados, ...rest}) => {
    return (<InformacoesEstilo>
        <NomeEscola>
            {dados && dados.nome}
        </NomeEscola>
        <EnderecoEscola>
            Endereço:  
            {dados && dados.endereco}
        </EnderecoEscola>
    </InformacoesEstilo>)
}

export default InformacoesEscola;
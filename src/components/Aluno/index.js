import React from 'react';

import {NomeDoAluno, InformacoesPessoais, Container} from './styled';

const Aluno = ({dados, ...resto}) => {
    
    return (
        <Container {...resto}>
            <NomeDoAluno>
                {dados.nome}
            </NomeDoAluno>
            <InformacoesPessoais>
                <p>
                    {dados.email}
                </p>
                <p>
                    Data de nascimento:{dados.data_nascimento}
                </p>
                <p>
                    {dados.genero}
                </p>
                

                <small>
                    Cadastrado em: {dados.data_cadastro}
                </small>
                

            </InformacoesPessoais>
        </Container>
    );
}

export default Aluno;
import React from 'react';

import {NomeDoAluno, InformacoesPessoais, Container} from './styled';

const Aluno = ({dados, ...resto}) => {
    
    return (
        <>
        <Container>
            <NomeDoAluno>
                {dados.nome}
            </NomeDoAluno>
            <InformacoesPessoais>
                <div>
                    {dados.email}
                </div>
                <div>
                    Data de nascimento:{dados.data_nascimento}
                </div>
                <div>
                    {dados.email}
                </div>
                <div>
                    {dados.genero}
                </div>
                

                <small>
                    Cadastrado em: {dados.data_cadastro}
                </small>
                

            </InformacoesPessoais>
        </Container>
        </>
    );
}

export default Aluno;
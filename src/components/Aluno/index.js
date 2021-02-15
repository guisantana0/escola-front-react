import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import {NomeDoAluno, InformacoesPessoais, Container} from './styled';

const Aluno = ({dados, ...resto}) => {
    const [informacoes,setInformacoes] = useState(dados);

    const mandaExcluir = (e) => {
        api.post('aluno/excluir/',informacoes).then(retornoExclusao);
    }
    
    const retornoExclusao = (resposta)=> {
        window.location.reload();
    }

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
            <div>
                <Link to={`/aluno/manter/${dados.id}`}>
                        <button className="warning m-3" >
                            Editar
                        </button>
                </Link>

                <span>
                    <button className="danger m-3" onClick={mandaExcluir}>
                        Excluir
                    </button>
                </span>
            </div>
        </Container>
    );
}

export default Aluno;
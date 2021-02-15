import React, { useState } from "react";
import Aluno from "../components/Aluno";
import Navegacao from "../components/Navegacao";
import api from "../services/api";

// import { Container } from './styles';

function NovoAlunoNaTurma({...params}) {
  const [alunos, setAlunos] = useState([]);

  const turma_id = params.match.params.id;

  const buscarAlunos = (e) => {
    const campoDeBuscaFormatado = encodeURI(e.target.value);
    const url = `/alunos/nome/turma/novos/?&nome=${campoDeBuscaFormatado}&turma_id=${turma_id}`;
    
    api
      .get(url)
      .then((resposta) => setAlunos(resposta.data));
  };

  const adicionaAlunoNaTurma = (e) => {
    console.log(e.target);
  };

  const indiceNavegacao = [
    {nome:'Principal',rota:'/principal'},
    { nome: "Escola", rota: "/escolas" },
  ];

  return (
    <>
      <Navegacao caminhos={indiceNavegacao}></Navegacao>
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Nome:</label>
            <input type="text" onChange={buscarAlunos} />
          </div>

          <div>
            {alunos.map((aluno) => (

              <Aluno
                key={aluno.id}
                dados={aluno}
                onClick={adicionaAlunoNaTurma}
              />
            ))}
          </div>
        </form>
      </div>
    </>
  );
}

export default NovoAlunoNaTurma;

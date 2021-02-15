import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Aluno from "../components/Aluno";
import Navegacao from "../components/Navegacao";
import api from "../services/api";

// import { Container } from './styles';

function NovoAlunoNaTurma({ ...params }) {
  const history = useHistory();
  const [alunos, setAlunos] = useState([]);

  const turma_id = params.match.params.id;

  const buscarAlunos = (e) => {
    const campoDeBuscaFormatado = encodeURI(e.target.value);
    const url = `/alunos/nome/turma/novos/?&nome=${campoDeBuscaFormatado}&turma_id=${turma_id}`;
    api.get(url).then((resposta) => setAlunos(resposta.data));
  };

  const adicionaAlunoNaTurma = (aluno_id) => {
    const url = `/turma/adicionar/aluno/`;
    const dados = { aluno_id, turma_id };
    api.post(url, dados).then(resultadoAdicionar);
  };

  const resultadoAdicionar = (resultado) => {
    if (resultado.data.sucesso) {
      history.goBack();
    }
  };

  const indiceNavegacao = [
    { nome: "Principal", rota: "/principal" },
    { nome: "Escola", rota: "/escolas" },
  ];

  const inicio = () => {
    buscarAlunos({target:{value:''}});
  }

  useEffect(inicio, []);

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
              <Aluno key={aluno.id} dados={aluno} editar={false}>
                <button
                  className="success"
                  onClick={(e) => adicionaAlunoNaTurma(aluno.id)}
                >
                  Adicionar na turma
                </button>
              </Aluno>
            ))}
          </div>
        </form>
      </div>
    </>
  );
}

export default NovoAlunoNaTurma;

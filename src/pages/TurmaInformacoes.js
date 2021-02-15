import React, { useEffect, useState } from "react";
import Aluno from "../components/Aluno";
import InformacoesTurma from "../components/InformacoesTurma";
import InformacoesEscola from "../components/InformacoesEscola";
import Navegacao from "../components/Navegacao";
import api from "../services/api";
import IconeNovoAlunoNaTurma from "../components/IconeNovoAlunoNaTurma";

const TurmaInformacoes = ({ ...params }) => {
  const turma_id = params.match.params.id;

  const [alunos, setAlunos] = useState([]);
  const [informacoes, setInformacoes] = useState([]);
  const [escola, setEscola] = useState([]);

  const inicio = () => {
    obtemListaDeAlunos();
    obtemInformacoesDaTurma();
  };

  const atualizaEscola = () => {
    obtemInformacoesDaEscola();
  };

  const obtemListaDeAlunos = () => {
    api
      .get(`alunos/turma/?turma_id=${turma_id}`)
      .then((resposta) => setAlunos(resposta.data));
  };

  const obtemInformacoesDaTurma = () => {
    api
      .get(`turmas/?id=${turma_id}`)
      .then((resposta) => setInformacoes(resposta.data[0]));
  };

  const obtemInformacoesDaEscola = () => {
    api
      .get(`escolas/?id=${informacoes.escola_id}`)
      .then((resposta) => setEscola(resposta.data[0]));
  };

  const removerDaTurma = (aluno_id) => {
    const dados = {aluno_id,turma_id};
    const url = "/turma/excluir/aluno/";
    api.post(url,dados).then(retornoRemoverDaTurma);
  }

  const retornoRemoverDaTurma = (resposta) => {
    if (resposta.data.sucesso){
      window.location.reload();
    }
  }

  useEffect(inicio, []);
  useEffect(atualizaEscola, [informacoes]);

  const indiceNavegacao = [
    { nome: "Principal", rota: "/principal" },
    { nome: "Escola", rota: "/escolas" },
    { nome: escola?.nome, rota: `/escolas/${escola?.id}` },
  ];

  return (
    <>
      <Navegacao caminhos={indiceNavegacao}></Navegacao>
      <InformacoesEscola dados={escola} />
      <InformacoesTurma dados={informacoes} />
      <IconeNovoAlunoNaTurma dados={informacoes} />

      {alunos.map((aluno) => (
        <Aluno key={aluno.id} dados={aluno} excluir={false}>
          <button className="danger" onClick={ (e) => {removerDaTurma(aluno.id)}}>
            Remover da turma
          </button>
        </Aluno>
      ))}
    </>
  );
};

export default TurmaInformacoes;

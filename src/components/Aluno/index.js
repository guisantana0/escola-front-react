import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import { NomeDoAluno, InformacoesPessoais, Container } from "./styled";

const Aluno = ({ dados, editar, excluir, children, ...resto }) => {
  const [informacoes, setInformacoes] = useState(dados);
  const [podeExcluir, setPodeExcluir] = useState(true);
  const [podeEditar, setPodeEditar] = useState(true);

  const inicio = () => {
      setPodeExcluir(excluir);
      setPodeEditar(editar);
  }

  const mandaExcluir = (e) => {
    api.post("aluno/excluir/", informacoes).then(retornoExclusao);
  };

  const retornoExclusao = (resposta) => {
    window.location.reload();
  };

  useEffect(inicio, []);

  return (
    <Container {...resto}>
      <NomeDoAluno>{dados.nome}</NomeDoAluno>
      <InformacoesPessoais>
        <p>{dados.email}</p>
        <p>Data de nascimento:{dados.data_nascimento}</p>
        <p>{dados.genero}</p>

        <small>Cadastrado em: {dados.data_cadastro}</small>
      </InformacoesPessoais>
      <div>
          {children}

          {podeEditar && (
            <Link to={`/aluno/manter/${dados.id}`}>
            <button className="warning m-3">Editar</button>
            </Link>
          )}

        {podeExcluir && (
          <span>
            <button className="danger m-3" onClick={mandaExcluir}>
              Excluir
            </button>
          </span>
        )}
      </div>
    </Container>
  );
};

export default Aluno;

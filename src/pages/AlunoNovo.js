import React, { useState, useEffect } from "react";
import Navegacao from "../components/Navegacao";
import { useHistory } from "react-router-dom";
import api from "../services/api";

const AlunoNovo = ({ ...params }) => {
  const history = useHistory();
  const [aluno, setAluno] = useState({
    id: 0,
    nome: "",
    email: "",
    data_nascimento: "",
    genero: ""
  });



  const id = params.match.params.id;

  const indiceNavegacao = [
    {nome:'Principal',rota:'/principal'},
    { nome: "Alunos", rota: "/alunos" },
  ];

  const inicio = () => {
    obtemDadosDoAluno();
  };

  const obtemDadosDoAluno = () => {
    if (id !== undefined) {
      api
        .get(`alunos/?id=${id}`)
        .then((resposta) => setAluno(resposta.data[0]));
    }
  };

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    if (aluno.genero==""){
      return;
    }
    if (aluno.id == 0){
        api.post("aluno/adicionar", aluno).then(retornoSubmissao);
    }else{
        api.post("aluno/atualizar", aluno).then(retornoSubmissao);
    }
  };

  const retornoSubmissao = (resposta) => {
    if (resposta.data.sucesso) {
      history.push("/alunos");
    } else {
      alert(resposta.data.mensagem);
    }
  };

  const atualizaNome = (e) => {
    setAluno({ ...aluno, nome: e.target.value})
  };

  const atualizaDataNascimento = (e) => {
    setAluno({...aluno, data_nascimento: e.target.value} )
  };

  const atualizaEmail = (e) => {
    setAluno({...aluno, email: e.target.value} )
  };

  const atualizaGenero = (e) => {
    setAluno({...aluno, genero: e.target.value} )
  };
 

  useEffect(inicio, []);

  return (
    <>
      <Navegacao caminhos={indiceNavegacao}></Navegacao>
      <div className="container">
        <form onSubmit={aoSubmeter}>
          <div >
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              maxLength="255"
              value={aluno.nome}
              onChange={atualizaNome}
              className="form-control"
              placeholder="Digite o nome do aluno"
            />
          </div>

          <div className="mt-2">
            <label>Data de Nascimento</label>
            <input
              type="date"
              name="data_nascimento"
              value={aluno.data_nascimento}
              onChange={atualizaDataNascimento}
            />
          </div>

          <div className="mt-2">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={aluno.email}
              onChange={atualizaEmail}
            />
          </div>

          
          <div className="mt-2">
            <label>Gênero</label>
            <select name="genero" onChange={atualizaGenero} required placeholder="Selecione um gênero">
                <option value>Selecione um gênero</option>
                <option value="MASCULINO">
                    Masculino
                </option>
                <option value="FEMININO">
                    Feminino
                </option>
            </select>
          </div>

          <button className="mt-3" type="submit">Salvar</button>
        </form>
      </div>
    </>
  );
};

export default AlunoNovo;

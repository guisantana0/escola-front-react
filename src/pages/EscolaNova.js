import React, { useState, useEffect } from "react";
import Navegacao from "../components/Navegacao";
import { useHistory } from "react-router-dom";
import api from "../services/api";

const EscolaNova = ({ ...params }) => {
  const history = useHistory();
  const [escola, setEscola] = useState({
    id: 0,
    nome: "",
    endereco: "",
  });



  const id = params.match.params.id;

  const indiceNavegacao = [
    { nome: "Principal", rota: "/" },
    { nome: "Escola", rota: "/escolas" },
  ];

  const inicio = () => {
    obtemDadosDaEscola();
  };

  const obtemDadosDaEscola = () => {
    if (id !== undefined) {
      api
        .get(`escolas/?id=${id}`)
        .then((resposta) => setEscola(resposta.data[0]));
    }
  };

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    if (escola.id == 0){
        api.post("escola/adicionar", escola).then(retornoSubmissao);
    }else{
        api.post("escola/atualizar", escola).then(retornoSubmissao);
    }
  };

  const retornoSubmissao = (resposta) => {
    console.log(resposta);
    if (resposta.data.sucesso) {
      history.push("/escolas");
    } else {
      alert(resposta.data.mensagem);
    }
  };

  const atualizaNome = (e) => {
    setEscola({ ...escola, nome: e.target.value})
  };

  const atualizaEndereco = (e) => {
    setEscola({...escola, endereco: e.target.value} )
  };

  useEffect(inicio, []);

  return (
    <>
      <Navegacao caminhos={indiceNavegacao}></Navegacao>
      <div className="container">
        <form onSubmit={aoSubmeter}>
          <div>
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              maxLength="100"
              value={escola.nome}
              onChange={atualizaNome}
              className="form-control"
              placeholder="Digite o nome da escola"
            />
          </div>

          <div>
            <label>Endereço:</label>
            <input
              type="text"
              name="endereco"
              maxLength="255"
              value={escola.endereco}
              onChange={atualizaEndereco}
              placeholder="Digite o endereço da escola"
            />
          </div>

          <button type="submit">Salvar</button>
        </form>
      </div>
    </>
  );
};

export default EscolaNova;

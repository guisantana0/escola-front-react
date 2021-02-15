import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./../pages/Home";
import Escolas from "./../pages/Escolas";

import Layout from "./../components/_layout";
import EscolaInformacoes from "../pages/EscolaInformacoes";
import TurmaInformacoes from "../pages/TurmaInformacoes";
import EscolaNova from "../pages/EscolaNova";
import TurmaNova from "../pages/TurmaNova";
import NovoAlunoNaTurma from "../pages/NovoAlunoNaTurma";
import Principal from "../pages/Principal";
import Alunos from "../pages/Alunos";
import AlunoNovo from "../pages/AlunoNovo";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Layout>
            <Route path="/principal" exact component={Principal} />
            <Route path="/escolas" exact component={Escolas} />
            <Route path="/escola/manter" exact component={EscolaNova} />
            <Route path="/escola/manter/:id" exact component={EscolaNova} />
            <Route path="/escola/:id/nova-turma" exact component={TurmaNova} />
            <Route path="/escolas/:id" exact component={EscolaInformacoes} />
            <Route path="/turma/:id" exact component={TurmaInformacoes} />
            <Route path="/turma/manter/:turma_id" exact component={TurmaNova} />
            <Route path="/turma/:id/novo-aluno" exact component={NovoAlunoNaTurma} />
            <Route path="/alunos" exact component={Alunos} />
            <Route path="/aluno/manter" exact component={AlunoNovo} />
            <Route path="/aluno/manter/:id" exact component={AlunoNovo} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;

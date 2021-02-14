import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./../pages/Home";
import Escolas from "./../pages/Escolas";

import Layout from "./../components/_layout";
import EscolaInformacoes from "../pages/EscolaInformacoes";
import TurmaInformacoes from "../pages/TurmaInformacoes";
import EscolaNova from "../pages/EscolaNova";
import TurmaNova from "../pages/TurmaNova";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Layout>
            <Route path="/escolas" exact component={Escolas} />
            <Route path="/escola/manter" exact component={EscolaNova} />
            <Route path="/escola/manter/:id" exact component={EscolaNova} />
            <Route path="/escola/:id/nova-turma" exact component={TurmaNova} />
            <Route path="/escolas/:id" exact component={EscolaInformacoes} />
            <Route path="/turma/:id" exact component={TurmaInformacoes} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;

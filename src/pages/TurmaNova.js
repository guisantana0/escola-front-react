import React, {useState, useEffect} from 'react';
import api from "../services/api";
import { useHistory } from "react-router-dom";

import InformacoesEscola from './../components/InformacoesEscola';
import Navegacao from '../components/Navegacao';

const TurmaNova = ({dados,...params}) => {
    const history = useHistory();
    const [escola,setEscola] = useState([]);
    const [turma,setTurma] = useState({});

    const id_escola = params.match.params.id;
    const turma_id = params.match.params.turma_id;


    const inicio = ()=>{
        buscaInformacoesDaTurma();
        buscaInformacoesDaEscola();
    };

    const alterarSerie = (e) => {
        setTurma( { ...turma, serie: e.target.value} );
    }

    const alterarNivel = (e) => {
        setTurma( { ...turma, nivel_ensino: e.target.value} );
    }

    const alterarAno = (e) => {
        setTurma( {...turma, ano: e.target.value} );
    }

    const alterarTurno = (e) => {
        setTurma( {...turma, turno: e.target.value} );
    }
    const submeterFormulario = (e) => {
        e.preventDefault();
        if (turma.id == undefined) {
          api.post("/turma/adicionar", turma).then(retornoSalvar);
        } else {
          api.post("/turma/atualizar", turma).then(retornoSalvar);
        }
    }

    const retornoSalvar = (e) => {
        history.goBack();
    }

    const buscaInformacoesDaEscola = () => {
        api.get(`/escolas/?&id=${id_escola}`).then( resultado => setEscola(resultado.data));
    };

    const buscaInformacoesDaEscolaPorID = (id) => {
        api.get(`/escolas/?&id=${id}`).then( resultado => setEscola(resultado.data));
    };

    const buscaInformacoesDaTurma = () => {
        api.get(`/turmas/?&id=${turma_id}`).then(atualizaInformacoesDaTurmaEscola);
        // api.get(`/turmas/?&id=${turma_id}`).then( (resultado) => setTurma(resultado.data[0]));
    };

    const atualizaInformacoesDaTurmaEscola = (resultado) => {
        const dados = resultado.data[0];
        if (dados != undefined){
            setTurma(dados);
            buscaInformacoesDaEscolaPorID(dados.escola_id);
        }
    }

    const atualizaVinculoEscolaTurma = () => {
        if (escola[0] != undefined){
            setTurma({...turma, escola_id: escola[0].id});
        }
        
    }

    useEffect(inicio, []);
    useEffect(() => {console.log(turma)}, [turma]);
    useEffect(atualizaVinculoEscolaTurma, [escola]);

    const indiceNavegacao = [
        { nome: "Principal", rota: "/principal" },
        { nome: "Escola", rota: "/escolas" },
        { nome: escola[0]?.nome, rota: `/escolas/${escola[0]?.id}` },
      ];

    return (
        <>
            <Navegacao caminhos={indiceNavegacao}></Navegacao>
            {
                escola.map((informacao)=> <InformacoesEscola key={informacao.id} dados={informacao}/>)
            }

            <form className="container" onSubmit={submeterFormulario} >
                
                <div className="form-group">
                    <label>
                        Série da turma
                    </label>
                    <input className="form-control" type="number" max="10" min="0" name="serie" value={turma?.serie} onChange={alterarSerie} />
                </div>
                
                <div className="form-group">
                    <label>
                        Nível de ensino
                    </label>
                    <select name="nivel_ensino" value={turma?.nivel_ensino} className="form-control" onChange={alterarNivel} required>
                        <option value="">
                            Selecione
                        </option>
                        <option value="Básico">
                            Básico
                        </option>
                        <option value="Fundamental">
                            Fundamental
                        </option>
                        <option value="Médio">
                            Médio
                        </option>
                    </select>
                </div>

                
                <div className="form-group">
                    <label>
                        Turno
                    </label>
                    <select name="turno" value={turma?.turno} className="form-control" onChange={alterarTurno} required>
                        <option value="">
                            Selecione
                        </option>
                        <option value="Matutino">
                            Matutino
                        </option>
                        <option value="Vespertino">
                            Vespertino
                        </option>
                        <option value="Noturno">
                            Noturno
                        </option>
                        <option value="Integral">
                            Integral
                        </option>
                    </select>
                </div>

                <div className="form-group">
                    <label>
                        Ano
                    </label>

                    <input className="form-control" type="number" maxLength="4" value={turma?.ano} onChange={alterarAno} />
                </div>
                
                <div className="form-group">
                    <button className="success pull-right" type='submit'>
                        Salvar
                    </button>
                </div>
            </form>
        </>
    )
}

export default TurmaNova;
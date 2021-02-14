import React, {useState, useEffect} from 'react';
import api from "../services/api";
import { useHistory } from "react-router-dom";

import InformacoesEscola from './../components/InformacoesEscola';

const TurmaNova = ({...params}) => {
    const history = useHistory();
    const [escola,setEscola] = useState([]);
    const [turma,setTurma] = useState([]);

    const id_escola = params.match.params.id;


    const inicio = ()=>{
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
        api.post('/turma/adicionar',turma).then(retornoSalvar);
    }

    const retornoSalvar = (e) => {
        history.push(`/escolas/${id_escola}`);
    }

    const buscaInformacoesDaEscola = () => {
        api.get(`/escolas/?&id=${id_escola}`).then( resultado => setEscola(resultado.data));
    };

    const atualizaVinculoEscolaTurma = () => {
        setTurma({ ...turma, escola_id: escola[0]?.id } );
    }

    useEffect(inicio, []);
    useEffect(atualizaVinculoEscolaTurma, [escola]);

    return (
        <>
            {
                escola.map((informacao)=> <InformacoesEscola key={informacao.id} dados={informacao}/>)
            }

            <form className="container" onSubmit={submeterFormulario} >
                
                <div className="form-group">
                    <label>
                        Série da turma
                    </label>
                    <input className="form-control" type="number" max="10" min="0" name="serie" value={turma.serie} onChange={alterarSerie} />
                </div>
                
                <div className="form-group">
                    <label>
                        Nível de ensino
                    </label>
                    <select name="nivel_ensino" className="form-control" onChange={alterarNivel}>
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
                    <select name="turno" className="form-control" onChange={alterarTurno}>
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

                    <input className="form-control" type="number" maxLength="4" value={turma.ano} onChange={alterarAno} />
                </div>
                
                <div className="form-group">
                    <button className="success pull-right">
                        Salvar
                    </button>
                </div>
            </form>
        </>
    )
}

export default TurmaNova;
import React, { useEffect , useState} from 'react';
import {Link} from 'react-router-dom';

import InformacoesEscola from './../components/InformacoesEscola';
import TurmaEscola from './../components/TurmaEscola';
import Navegacao from '../components/Navegacao';
import api from '../services/api';
import IconeNovaTurmaEscola from '../components/IconeNovaTurmaEscola';

const EscolaInformacoes = ({ ...params }) => {

    const [informacoes,setInformacoes] = useState([]);
    const [turmas,setTurmas] = useState([]);

    const buscaInformacoesDaEscola = function(){
        const id = params.match.params.id;
        api.get(`/escolas/?&id=${id}`).then( resultado => setInformacoes(resultado.data));
    };

    const buscaTurmasDaEscola = function (){
        let id = params.match.params.id;    
        api.get(`turmas/?&escola_id=${id}`).then( resultado => setTurmas(resultado.data));
    }
    useEffect(buscaInformacoesDaEscola,[]);
    useEffect(buscaTurmasDaEscola,[]);

    const indiceNavegacao = [
        {nome:'Principal',rota:'/'},
        {nome:'Escola',rota:'/escolas'},
    ]

    return (<>
            <Navegacao caminhos={indiceNavegacao}></Navegacao>
            {
                informacoes.map((informacao)=> <InformacoesEscola key={informacao.id} dados={informacao}/>)
            }
                <IconeNovaTurmaEscola id={informacoes[0]?.id}></IconeNovaTurmaEscola>
            {
                turmas.map((turma)=> <TurmaEscola key={turma.id} dados={turma}/>)
            }
    
    </>);
}

export default EscolaInformacoes;
import React, { useEffect , useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import InformacoesEscola from './../components/InformacoesEscola';
import TurmaEscola from './../components/TurmaEscola';
import Navegacao from '../components/Navegacao';

const EscolaInformacoes = ({ ...params }) => {

    const [informacoes,setInformacoes] = useState([]);
    const [turmas,setTurmas] = useState([]);

    const buscaInformacoesDaEscola = function(){
        let id = params.match.params.id;
        axios.get(`http://192.168.1.13:80/escola-api/escolas/?&id=${id}`).then( resultado => setInformacoes(resultado.data));
    };

    const buscaTurmasDaEscola = function (){
        let id = params.match.params.id;    
        axios.get(`http://192.168.1.13:80/escola-api/turmas/?&escola_id=${id}`).then( resultado => setTurmas(resultado.data));
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
                informacoes.map((informacao)=> <InformacoesEscola dados={informacao}/>)
            }
            {
                turmas.map((turma)=> <TurmaEscola dados={turma}/>)
            }
    
    </>);
}

export default EscolaInformacoes;
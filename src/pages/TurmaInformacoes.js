import React, { useEffect, useState } from 'react';
import Aluno from '../components/Aluno';
import InformacoesTurma from '../components/InformacoesTurma';
import InformacoesEscola from '../components/InformacoesEscola';
import Navegacao from '../components/Navegacao';
import api from '../services/api';
import IconeNovoAlunoNaTurma from '../components/IconeNovoAlunoNaTurma';

const TurmaInformacoes = ({...params}) => {
    
    const id = params.match.params.id;

    const [alunos, setAlunos] = useState([]);
    const [informacoes, setInformacoes] = useState([]);
    const [escola, setEscola] = useState([]);

    const inicio = () => {
        obtemListaDeAlunos();
        obtemInformacoesDaTurma();
    }

    const atualizaEscola = () => {
        obtemInformacoesDaEscola();
    }

    const obtemListaDeAlunos = () =>{
        api.get(`alunos/turma/?turma_id=${id}`).then( (resposta) =>  setAlunos( resposta.data ) );
    };

    const obtemInformacoesDaTurma = () => {
        api.get(`turmas/?id=${id}`).then( (resposta) => setInformacoes( resposta.data[0] ) );
    };

    const obtemInformacoesDaEscola = () => {
        api.get(`escolas/?id=${informacoes.escola_id}`).then( (resposta) => setEscola( resposta.data[0])  );
    };


    useEffect(inicio,[]); 
    useEffect(atualizaEscola,[informacoes]);

    
    const indiceNavegacao = [
        {nome:'Principal',rota:'/principal'},
        {nome:'Escola',rota:'/escolas'},
        {nome: escola?.nome ,rota:`/escolas/${escola?.id}`},
    ]

    return (
    <>
        <Navegacao caminhos={indiceNavegacao}></Navegacao>
        <InformacoesEscola dados={escola}/>
        <InformacoesTurma dados={informacoes}/>
        <IconeNovoAlunoNaTurma dados={informacoes}/>

        {
            alunos.map( (aluno) => <Aluno key={aluno.id} dados={aluno}/> )
        }
    </>
    )
}

export default TurmaInformacoes;
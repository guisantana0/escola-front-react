import React, { useEffect, useState } from 'react';

const TurmaInformacoes = () => {
    
    const [alunos, setAlunos] = useState([]);

    const obtemListaDeAlunos = () =>{
        let id = 1;
        axios.get(`https://192.168.1.13/escola-api/alunos/?&id=${id}`).then( (resposta) => setAlunos( resposta.data ) );
    };

    useEffect(obtemListaDeAlunos,[]);
    return (<> </>)
}

export const TurmaInformacoes;
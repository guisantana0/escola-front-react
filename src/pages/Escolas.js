import axios from 'axios';
import React, {useEffect, useState} from 'react';
import IconeEscola from '../components/IconeEscola';
import IconeNovaEscola from '../components/IconeNovaEscola';
import Navegacao from '../components/Navegacao';
import api from '../services/api';

const Escolas =  () => {
    
    const [escolas,setEscolas] = useState([]);
    
    const obterEscolasDaApi = () =>{
        api.get('/escolas/total-alunos/').then( resultado => setEscolas(resultado.data))
    };

    useEffect(() => {
        obterEscolasDaApi();
    }, []);

    const indiceNavegacao = [
        {nome:'Principal',rota:'/principal'},
    ]
    
    return (<>
        <Navegacao caminhos={indiceNavegacao}></Navegacao>
        <IconeNovaEscola />
        {
            escolas.map( 
                (escola) => (<IconeEscola key={escola.id} dados={escola}/> )
            )
        }
    </>);

};

export default Escolas;
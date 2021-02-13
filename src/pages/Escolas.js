import axios from 'axios';
import React, {useEffect, useState} from 'react';
import IconeEscola from '../components/IconeEscola';
import IconeNovaEscola from '../components/IconeNovaEscola';
import Navegacao from '../components/Navegacao';

const Escolas =  () => {
    
    const [escolas,setEscolas] = useState([]);
    
    const obterEscolasDaApi = () =>{
        axios.get('http://192.168.1.13:80/escola-api/escolas/').then( resultado => setEscolas(resultado.data))
    };

    useEffect(() => {
        obterEscolasDaApi();
    }, []);

    const indiceNavegacao = [
        {nome:'Principal',rota:'/'},
    ]
    
    return (<>
        <Navegacao caminhos={indiceNavegacao}></Navegacao>
        <IconeNovaEscola></IconeNovaEscola>
        {
            escolas.map( 
                (escola) => (<IconeEscola key={escola.id} dados={escola}/> )
            )
        }
    </>);

};

export default Escolas;
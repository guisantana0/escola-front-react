import React, { useEffect, useState } from 'react';
import Aluno from '../components/Aluno';
import IconeNovoAluno from '../components/IconeNovoAluno';
import Navegacao from '../components/Navegacao';
import api from '../services/api';

const Alunos = () => {
    const [alunos,setAlunos] = useState([]);


    const buscarAlunos = (e) => {
        if (e == undefined){
            return;
        }
        const url = `alunos/nome/?&nome=${e?.target.value}`;
        api.get(url).then( (resposta) => setAlunos(resposta.data) );
    };

    const indiceNavegacao = [
        {nome:'Principal',rota:'/principal'},        
      ];

      useEffect(buscarAlunos, []);

  return (
      <>
       <Navegacao caminhos={indiceNavegacao}/>
        <div className="container">

            <form onSubmit={(e)=> e.preventDefault() }>
                <label>Buscar pelo nome:</label>
                <input type="text" name="nome" 
                placeholder="Digite o nome do aluno aqui para pesquisar"
                onChange={buscarAlunos}
                />
            </form>
            <IconeNovoAluno/>
            {
                alunos?.map( (dadosAluno) => <Aluno dados={dadosAluno}/>)
            }
        </div>
      </>
  );
}

export default Alunos;
import React from 'react';
import IconeListarAlunos from '../components/IconeListarAlunos';
import IconeListarEscolas from '../components/IconeListarEscolas';

const Principal = () =>{
    return (
        <div className="container">
            <IconeListarEscolas/>

            <IconeListarAlunos/>
        </div>
    )
}

export default Principal;
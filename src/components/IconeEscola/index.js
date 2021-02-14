import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Container, Titulo, Endereco } from './styles';
import api from "./../../services/api";

const IconeEscola = ({dados,...props}) => {

    const [informacoes, setInformacoes] = useState(dados);

    const mandaExcluir = (e) => {
        api.post('escola/excluir/',informacoes).then(retornoExclusao);
    }

    const retornoExclusao = (resposta)=> {
        console.log(resposta);
        window.location.reload();
    }

    return (
        <Container>
            <Link to={`escolas/${dados.id}`}>
                <div>
                    <Titulo>
                        {dados.nome}
                    </Titulo>
                    <Endereco>
                        {dados.endereco}
                    </Endereco>
                </div>
                
            </Link>
            
            <Link to={`escola/manter/${dados.id}`}>
                <button className="warning m-3" >
                    Editar
                </button>
            </Link>

            <span>
                <button className="danger m-3" onClick={mandaExcluir}>
                    Excluir
                </button>
            </span>
        </Container>
    );
}

export default IconeEscola;
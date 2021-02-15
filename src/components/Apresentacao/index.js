import  React from 'react';
import { Link } from 'react-router-dom';

import {Container , BotaoAcessar} from './styles';

export default function Apresentacao() {
  return (
    <>
      <Container>
        <Link to="/principal">
          <BotaoAcessar>
            Acessar
          </BotaoAcessar>
        </Link>
      </Container>
    </>
  );
}

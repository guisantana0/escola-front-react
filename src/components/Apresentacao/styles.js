import styled from 'styled-components';
import imagem from './../../assets/apresentacao.png';
import imagemLandscape from './../../assets/apresentacao-landscape.png';

export const Container = styled.div`

display:flex;

flex-direction: column-reverse;
justify-content:start;
align-items:center;
align-content:center;

background-image: url(${imagemLandscape});
width:100%;
height:100vh;
background-size:cover;
  /* display */
@media screen and (max-width: 1080px) and (orientation: portrait) {
  background-image: url(${imagem});
  width:100%;
  height:100vh;
  background-size:cover;
}

@media screen and (max-width: 1080px) and (orientation: landscape) {
  background-image: url(${imagemLandscape});
  width:100%;
  height:100vh;
  background-size:cover;
}
  
`;

export const BotaoAcessar = styled.button`
    
    border-radius:10px;
    border:0;
    background-color: #67bafe;
    padding: 12px 24px 12px 24px;
    margin-bottom:100%;
    display: flex;
    align-self:center;
    

    color: white;
    font-size: 18px;
    font-weight:bold;
`;

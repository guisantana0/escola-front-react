import styled from 'styled-components';
import imagem from './../../assets/apresentacao.png';
import imagemLandscape from './../../assets/apresentacao-landscape.png';

export const Container = styled.div`
/* 
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
align-content:center; */

background-image: url(${imagemLandscape});
width:100%;
height:100vh;
background-size:cover;

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
    margin-top:30%;
    margin-left:80%;


    @media screen and (min-width: 1081px) and (orientation: portrait) {
        margin-top:80%;
        margin-left:10%;
        padding: 12px 32px 12px 32px;
    }

    @media screen and (max-width: 1080px) and (orientation: landscape) {
        padding: 12px 24px 12px 24px;
        margin-top:30%;
        margin-left:80%;
    }

    @media screen and (max-width: 720) and (orientation: landscape) {
      padding: 12px 24px 12px 24px;
        margin-top:30%;
        margin-left:80%;
    }
    

    color: white;
    font-size: 18px;
    font-weight:bold;
`;

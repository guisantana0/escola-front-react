import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-shrink:0;
`;
export const Container = styled.footer`

  color:white;
  padding: 2px;
  display:flex;
  width:100%;

  
  justify-content: center;
  align-content: center;
  align-items:center;
  background-color: #00695f;

  -webkit-transition: all 2s ease;
  -moz-transition: all 2s ease;
  -ms-transition: all 2s ease;
  -o-transition: all 2s ease;
  transition: all 2s ease;

  @media screen and (min-width: 768) and ( orientation: landscape){
    flex-direction: row;
  }
  @media screen and ( orientation: portrait){
    flex-direction: column;
  }
  
`;

export const Endereco = styled.div`
  display:flex;
  flex-direction: column;
  padding: 8px;
  margin: 4px;

`;

export const RedesSociais = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  margin: 4px;
  justify-content: space-between;
  align-content:center;
  align-items:center;
  img{
    display:flex;
      
    height: 32px;
    width: 32px;

  }
`;

export const Contato = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  margin: 4px;
`;
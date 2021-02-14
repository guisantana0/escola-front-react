import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:row;
  border-radius: 10px;
  background-color: white;

  a{
      text-decoration:none;
      color: #467eac;
  }
 

  
  padding: 40px;
  border: 2px #c0c0c0 solid;
  margin: 12px;
 
 background-color:#ffffff;
`;

export const Titulo = styled.div`
   @media screen and (max-width:425px)
  {
      font-size: 12px;
  }
  
  
  @media screen and (max-width:768px)
  {
      font-size: 32px;
  }

  @media screen and (min-width:769px)
  {
      font-size: 48px;
  }
`;


export const Endereco = styled.div`

    display: flex;
    margin-top:8px;
    font-size:24px;
    color: #467eac;
    
`;
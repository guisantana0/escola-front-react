import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  border-radius: 10px;
  background-color: white;
  a{
    font-size: 48px;
    text-decoration:none;
    color: #467eac;
  }
  
  padding: 40px;
  border: 2px #c0c0c0 solid;
  margin: 12px;
 
 background-color:#ffffff;
`;

export const Titulo = styled.div`
    display:flex;
    flex-direction:row;
`;


export const Plus = styled.div`
      background-color: cadetblue;
    display: table;
    border-radius: 50%;
    margin-top:19px;
    line-height: 24px;
    height: 10px;
`;


export const Endereco = styled.div`

    display: flex;
    margin-top:8px;
    font-size:24px;
    color: #467eac;
    
`;
import styled from 'styled-components';

export const Container = styled.div`
  text-decoration:none;
  color: #8080c0;
  display: flex;
  background-color: white;
  flex-direction:column;
  align-content:center;
  padding:20px;
  border-radius: 10px;
  a{
    text-decoration:none;
  }
  margin:20px
`;

export const NivelAno = styled.div`
  display:flex;
  flex-direction:row;
  /* margin: auto; */
  justify-content: space-between;

  span{
    font-size:32px;
  };
`;
 
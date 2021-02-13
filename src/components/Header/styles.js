import styled from 'styled-components';

export const Container = styled.header`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    align-content:center;
    height: 48px;
    font-size: 24px;
    background-color: #009688;
    /* border-bottom: 1px solid #0a7ef3; */
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS';
    
    a{
        text-decoration:none;
        color: white;
        cursor: pointer;
    }
`;

export const Margem = styled.div`
    height: 24px;
    background-color:#00695f;
    border-bottom: #33ab9f;
`;
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items:left;
    /* justify-content: space-between; */

    padding: 12px;

    background-color:#00bba8;

    a{
        text-decoration:none;
    }
    span{
        color:white;
        margin-left: 18px;
    }

    span:after{
       content:" > ";
    }
`;


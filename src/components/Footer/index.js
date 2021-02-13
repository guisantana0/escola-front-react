import React from 'react';
import {Wrapper, Container, Endereco, RedesSociais, Contato } from './styles.js';
import iconeLinkedin from './../../assets/iconeLinkedin.png';
import iconeTwitter from './../../assets/iconeTwitter.png';

const Footer = () => {
    return (<>
    <Wrapper>
        <Container>
            <Endereco>
                Endereço: Rua Carmindo de Campos S/N
            </Endereco>
            <RedesSociais>
                <img src={iconeLinkedin}/>            
                <img src={iconeTwitter}/>            
            </RedesSociais>
            <Contato>
                Escola.com
            </Contato>
            
        </Container>
    </Wrapper>
    </>);
}
export default Footer;
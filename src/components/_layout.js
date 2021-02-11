import React from 'react';

// import { Container } from './styles';
import Header from './Header';
import Footer from './Footer';


function Layout({children}) {
  return (<>
  <Header/>
    <main>
        {children}
    </main>
  <Footer/>
  </>);
}

export default Layout;
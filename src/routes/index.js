import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './../pages/Home';
import Escolas from './../pages/Escolas';

import Layout from './../components/_layout';
import EscolaInformacoes from '../pages/EscolaInformacoes';

const Router = () =>{
    return (<>
       
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/escolas' exact component={Escolas}/>
                        <Route path='/escolas/:id' exact component={EscolaInformacoes}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        
        </>
    );
}

export default Router;
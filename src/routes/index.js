import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './../pages/Home';
import Escolas from './../pages/Escolas';

import Layout from './../components/_layout';
const Router = () =>{
    return (<>
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/escolas' exact component={Escolas}/>
                </Switch>
            </BrowserRouter>
        </Layout>
        </>
    );
}

export default Router;
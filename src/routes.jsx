import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Vitrine from './Vitrine';
import Contato from './Contato';
import Sobre from './Sobre';

const Rotas = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Vitrine />
            </Route>
            <Route exact path='/contato'>
                <Contato />
            </Route>
            <Route exact path='/sobre'>
                <Sobre />
            </Route>            
        </Switch>
    )
}

export default Rotas;
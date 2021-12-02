import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Lugares from './pages/layoutLugares';//tela da disposição das poltronas vagas/ocupadas


export default function Routes(){
  
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} /> 
                <Route path="/layout-lugares" component={Lugares} /> 
            </Switch>
        </BrowserRouter>
    )
}
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Lugares from './components/boxHorario/index.js';//tela da disposição das poltronas vagas/ocupadas


export default function Rout(){
  
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact={true} element={Home} /> 
                <Route path="/layout-lugares" element={Lugares} /> 
            </Routes>
        </BrowserRouter>
    )
}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Lugares from './components/boxHorario/index.js';//tela da disposição das poltronas vagas/ocupadas
import Titulo from './components/fileira';

export default function Rout(){
  
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<Home/>} /> 
                <Route path="/layout-lugares" element={<Lugares/>} /> 
                <Route path="/titulo" element={<Titulo/>}/>
            </Routes>
        </Router>
    )
}
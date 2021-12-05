import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Lugares from './pages/layoutLugares'; //tela da disposição das poltronas vagas/ocupadas
import Horario from './pages/layoutHorario';
import LayoutTicket from './pages/layoutTicket';

export default function Rout(){
  
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<Home/>} /> 
                <Route path="/layout-lugares" element={<Lugares/>} /> 
                <Route path="/horarios" element={<Horario/>}/>
                <Route path="/CompraConcluida" element={<LayoutTicket/>}/>

            </Routes>
        </Router>
    )
}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Lugares from './pages/layoutLugares'; //tela da disposição das poltronas vagas/ocupadas
import Horario from './pages/layoutHorario';
import LayoutTicket from './pages/layoutTicket';
import Home from './pages/home';
import Pagamento from './pages/layoutPagamento';
import ProgSemanal from './pages/layoutSemana';



export default function Rout(){
  
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<Home/>} />  
                <Route path="programacao-semanal" element={<ProgSemanal/>}/>
                <Route path="/horarios" element={<Horario/>}/>
                <Route path="/lugares" element={<Lugares/>} />
                <Route path="/pagamento" element ={<Pagamento/>}/>
                <Route path="/CompraConcluida" element={<LayoutTicket/>}/>

            </Routes>
        </Router>
    )
}
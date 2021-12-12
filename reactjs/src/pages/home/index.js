import {Inicial} from './styled';
import CineMonk from '../../components/titulo'
import Subtitulo from '../../components/subtitulo';
import {Link} from 'react-router-dom';


export default function Home(){

    return(
        <Inicial>
            <div className = "TituloH">
                <img src = "/assets/imagens/Logo.svg" alt=""/>
                <CineMonk/>
            </div>
            <div className = "Faixa2H">
                <Subtitulo subtitulo = 'O que você quer fazer?'/>
                <Link className='none' to = {{pathname:'/programacao-semanal'}}><div className = "ConteudoH"><div>COMPRAR INGRESSO</div></div></Link>
            </div>
        </Inicial>
    )
}
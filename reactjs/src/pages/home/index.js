import {Inicial} from './styled';
import CineMonk from '../../components/titulo'
import Subtitulo from '../../components/subtitulo';
export default function Home(){

    return(
        <Inicial>
            <div className = "TituloH">
                <img src = "/assets/imagens/Logo.svg" alt=""/>
                <CineMonk/>
            </div>
            <div className = "Faixa2H">
                <Subtitulo subtitulo = 'O que você quer fazer?'/>
                <div className = "ConteudoH"><div>COMPRAR INGRESSO</div></div>
            </div>
        </Inicial>
    )
}
import {EscolherLugares} from  './styled'
import CineMonk from '../../components/titulo';
import Subtitulo from '../../components/subtitulo';
export default function LayoutLugares(){

    return(
        <EscolherLugares>
            <div className = "Faixa1">
                <div className = "Esquerda">
                    <img src = "/assets/imagens/Ticket.svg" alt= ""/>
                    <CineMonk/>
                </div>
                <div className = "Direita">
                    <Subtitulo subtitulo = 'Selecione os melhores lugares'/>
                </div>
            </div>
            <div className = "Conteudo">
                <div className = "Layout"></div>
                <div className = "btn-botao"></div>
            </div>
        </EscolherLugares>
    )
}
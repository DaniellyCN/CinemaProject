import {EscolherLugares} from  './styled'
import CineMonk from '../../components/titulo';
import Subtitulo from '../../components/subtitulo';
import Botao from '../../components/botão'
import FileiraHF from '../../components/fileirahf'
import FileiraEB from '../../components/fileiraeb';
import FileiraA from '../../components/fileiraa';

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
                <div className = "Layout">
                    <FileiraHF l = 'H'/>
                    <FileiraHF l = 'G'/>
                    <FileiraHF l = 'F'/>
                    <FileiraEB m = 'E'/>
                    <FileiraEB m = 'D'/>
                    <FileiraEB m = 'C'/>
                    <FileiraEB m = 'B'/>
                    <div className = 'vazio'></div>
                    <FileiraA o = 'A'/>
                </div>
                <div className = "btn-botao"><Botao etapa='Próximo'/></div>
            </div>
        </EscolherLugares>
    )
}
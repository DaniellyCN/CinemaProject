import {EscolherLugares} from  './styled'
export default function LayoutLugares(){

    return(
        <EscolherLugares>
            <div className = "Faixa1">
                <div className = "Esquerda"></div>
                <div className = "Direita"></div>
            </div>
            <div className = "Conteudo">
                <div className = "Layout"></div>
                <div className = "btn-botao"></div>
            </div>
        </EscolherLugares>
    )
}
import Botao from '../../components/botão'
import Titulo from '../../components/cineMonk'
import SelectEntrada from '../../components/Select-Entrada'
import Subtitulo from '../../components/subtitulo'
import {ContainerPagamento} from './styled'
import Filme from '../../components/FilmeUnico/styled'

export default function Pagamento(props) {
    return(
        <ContainerPagamento>
            <div className="cabecalho">
                <div className="cabe1"> 
                    <div className="logo"> <img src="./assets/imagens/logo.svg" alt="" /> </div>
                    <div className="titulos"> <Titulo /> </div>
                </div>
                <div className="subtitulos"> <Subtitulo subtitulo="Selecione a melhor opção de pagamento" /> </div>
            </div>
            <div className="conteudo">
                <div className="box-filme"> 
                    <Filme />
                </div>
                <div className="box-cont"> 
                    <div className="lugares">
                        <div className="nom-pedido"> Lugares </div>
                        <div className="in"> 
                            <SelectEntrada />
                        </div>
                    </div>
                    <div className="borda"></div>
                    <div className="pedido">
                        <div className="nom-pedido"> Pedido </div>
                        <div className="meia" style={{marginLeft: '1em'}}>    Ingressos Meia:&nbsp;&nbsp;&nbsp;&nbsp;02 </div>
                        <div className="inteira"> Ingressos Inteira:&nbsp;&nbsp;&nbsp;&nbsp;02 </div>
                        <div className="total" style={{marginLeft: '3em'}}> Total: R$ 100,00 </div>
                    </div> 
                </div>
            </div>
            <div className="roda"> 
                <Botao botao="Concluir" />
            </div>
        </ContainerPagamento>
    )
}
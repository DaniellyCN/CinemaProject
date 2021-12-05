import Botao from '../../components/botão'
import Titulo from '../../components/cineMonk'
import Ingresso from '../../components/ingresso'
import Subtitulo from '../../components/subtitulo'
import {ContainerTicket} from './styled'



export default function LayoutTicket() {
    return (
        <ContainerTicket>
            <div className="cabecalho">
                <div className="box-cabe">    
                    <div className="logo"> <img src="./assets/imagens/Ticket.svg" alt="" /> </div>
                    <div className="nom-caa"> <Titulo /> </div>
                </div>
                <div className="sub"> <Subtitulo subtitulo="Parabéns! Sua compra foi realizada com sucesso. Agora é só aproveitar o filme :)" /> </div>
            </div>
           <div className="conteudo">
               <Ingresso />
               <Ingresso />
               <Ingresso />
           </div>
           
           <div className="but">
                <Botao botao="Menu"/>
           </div>
        </ContainerTicket>
    )
}
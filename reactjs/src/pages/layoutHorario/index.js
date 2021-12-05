import {HorarioSala} from './styled';
import CineMonk from '../../components/titulo';
import Subtitulo from '../../components/subtitulo';
import FilmeUnico from '../../components/FilmeUnico/styled';
import BoxPequena from '../../components/boxHorario';
export default function LayoutHorario(){

    return(
        <HorarioSala>
            <div className = "Faixa1H">
                <div className = "EsquerdaH">
                    <img src= "/assets/imagens/Logo.svg"/>
                    <CineMonk/>
                </div>
                <div className = "DireitaH">
                    <Subtitulo subtitulo='Selecione o horário e o idioma'/>
                </div>
            </div>

            <div className = "ConteudoH">
                <div className = "BoxFilme"><FilmeUnico/></div>
                <div className = "BoxHorario">
                    <div>
                        <BoxPequena sala = '08' horario = '13:00' audio = 'Dublado'/>
                        <BoxPequena sala = '08' horario = '13:00' audio = 'Dublado'/>
                        <BoxPequena sala = '08' horario = '13:00' audio = 'Dublado'/>
                    </div>
                    <div>
                        <BoxPequena sala = '08' horario = '13:00' audio = 'Dublado'/>
                        <BoxPequena sala = '08' horario = '13:00' audio = 'Dublado'/>
                        <BoxPequena sala = '08' horario = '13:00' audio = 'Dublado'/>
                    </div>


                </div>
            </div>
        </HorarioSala>
    )
}
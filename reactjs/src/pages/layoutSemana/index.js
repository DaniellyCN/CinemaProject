import {Semana} from './styled';
import CineMonk from '../../components/titulo';
import Subtitulo from '../../components/subtitulo';
import BoxSemana from '../../components/boxSemana';

export default function LayoutSemana(props){


    return(
        <Semana>
            <div className = "TituloS">
                <img src='/assets/imagens/Logo.svg' alt=""/>
                <CineMonk/>
            </div>

            <div className = "SubtituloS">
                <Subtitulo subtitulo='Escolha a data que você deseja comprar o ingresso.'/>
            </div>

            <div className = "ConteudoS">
                <div className = "BoxGrande">
                    <div className = "diaSemana">Hoje</div>
                    <div className = "diaMes">04</div>
                    <div className = "mes">Maio</div>
                </div>
                <div className = "BoxesPeq">
                    <div>
                    <BoxSemana diaSemana='Sábado' diaMes='05' mes='Maio'/>
                    <BoxSemana diaSemana={'Domingo'} diaMes={'06'} mes={'Maio'}/>
                    <BoxSemana diaSemana={'Segunda'} diaMes={'07'} mes={'Maio'}/>
                    </div>

                    <div>
                        
                    <BoxSemana diaSemana={'Terça'} diaMes={'08'} mes={'Maio'}/>
                    <BoxSemana diaSemana={'Quarta'} diaMes={'09'} mes={'Maio'}/>
                    <BoxSemana diaSemana={'Quinta'} diaMes={'10'} mes={'Maio'}/>
                    </div>
                    
                </div>
            </div>

        </Semana>
    )
}
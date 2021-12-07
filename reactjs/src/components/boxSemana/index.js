import {Semanal} from './styled';

export default function BoxSemana(props){

    return(
        <Semanal>
            <div className = "diaSemana">{props.diaSemana}</div>
            <div className = "diaMes">{props.diaMes}</div>
            <div className = "mes">{props.mes}</div>
        </Semanal>
    )
}
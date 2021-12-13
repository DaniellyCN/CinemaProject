import {Semanal} from './styled';

export default function BoxSemana(props){

    return(
        <Semanal>
            <div className = "diaSemana">{props.info.diaSemana}</div>
            <div className = "diaMes">{props.info.dia}</div>
            <div className = "mes">{props.info.mes}</div>
        </Semanal>
    )
}
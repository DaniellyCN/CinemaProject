import {BoxH} from './styled.js'

export default function BoxHorario(props){

    return(
        <BoxH>
            <div className = "sala">{props.info.horarios.sala}</div>
            <div className = "horario">{props.info.horarios.hora}</div>
            <div className = "audio">{props.info.horarios.audio}</div>
        </BoxH>
    )
}
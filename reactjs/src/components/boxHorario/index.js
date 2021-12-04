import {BoxH} from './styled.js'

export default function BoxHorario(props){

    return(
        <BoxH>
            <div className = "sala">{props.sala}</div>
            <div className = "horario">{props.horario}</div>
            <div className = "audio">{props.audio}</div>
        </BoxH>
    )
}
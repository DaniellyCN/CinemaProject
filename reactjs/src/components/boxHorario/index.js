import {BoxH} from './styled.js'

export default function BoxHorario(props){

    return(
        <BoxH>
            <div className = "sala">{props.i.sala}</div>
            <div className = "horario">{props.i.horario}</div>
            <div className = "audio">{props.i.audio}</div>
        </BoxH>
    )
}
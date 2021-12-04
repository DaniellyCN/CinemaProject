import {Cadeira} from './styled'
export default function Poltrona(props){
    return(
        <Cadeira>
            <img src = '/assets/imagens/Cadeira.svg' alt=''/>
            <div className = "numero">{props.numero}</div>
        </Cadeira>
    )
}
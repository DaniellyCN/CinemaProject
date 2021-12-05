import {Letra} from './styled'

export default function Alfabeto(props){
    return(
        <Letra>
            <div>{props.letrinha}</div>
        </Letra>
    )
}
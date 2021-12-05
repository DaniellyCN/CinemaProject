import { HorizontalA } from "./styled";
import Alfabeto from '../alfabeto';
import Poltrona from '../poltrona';


export default function FileiraA(props){

    return(
        <HorizontalA>
            <div className = 'grupo1'>
                <Alfabeto letrinha={props.o}/>
            </div>

            <div className = 'grupo2'>
                <Poltrona numero = '1'/>
                <Poltrona numero = '2'/>
                <Poltrona numero = '3'/>
                <div className = 'vazio'></div>
            </div>

            <div className = 'grupo3'>
                <Poltrona numero = '5'/>
                <Poltrona numero = '6'/>
                <Poltrona numero = '7'/>
                <Poltrona numero = '8'/>
                <Poltrona numero = '9'/>
                <Poltrona numero = '10'/>
                <Poltrona numero = '11'/>
            </div>

            <div className = 'grupo4'>    
                <div className = 'vazio'></div>
                <Poltrona numero = '13'/>
                <Poltrona numero = '14'/>
                <Poltrona numero = '15'/>
            </div>

        </HorizontalA>
    )
}
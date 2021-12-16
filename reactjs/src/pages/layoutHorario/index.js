import {HorarioSala} from './styled';
import CineMonk from '../../components/titulo';
import Subtitulo from '../../components/subtitulo';
import FilmeUnico from '../../components/FilmeUnico/styled';
import BoxPequena from '../../components/boxHorario';
import { useState} from 'react';
import { Link } from 'react-router-dom';


export default function LayoutHorario(){

    const [horario, setHorario] = useState()

    return(
        <HorarioSala>
            <div className = "Faixa1H">
                <div className = "EsquerdaH">
                    <img src= "/assets/imagens/Logo.svg" alt=""/>
                    <CineMonk/>
                </div>
                <div className = "DireitaH">
                    <Subtitulo subtitulo='Selecione o horário e o idioma'/>
                </div>
            </div>

            <div className = "ConteudoH">
                <div className = "BoxFilme"><FilmeUnico/></div>
                <div className = "BoxHorario">
                    {horario.map((item) =>
                        <Link to = {{pathname:'/lugares', state:item}}>
                            <BoxPequena i = {item}/>
                        </Link>
                    )}
                    
                </div>
            </div>
        </HorarioSala>
    )
}
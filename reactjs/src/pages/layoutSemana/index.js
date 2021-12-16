import {Semana} from './styled';

import CineMonk from '../../components/titulo';
import Subtitulo from '../../components/subtitulo';
import BoxSemana from '../../components/boxSemana';
import {Link} from 'react-router-dom';
import Api from '../../services/api';
import { useState, useEffect } from 'react';

const api = new Api();



export default function LayoutSemana(props){
    
    
    const [box, setBox] = useState([]);

    async function listar(){
        const informacoes = await api.listarDias();
        setBox(informacoes);
        
    }
    console.log(props);
    
    useEffect(() => {
        listar();      
        
    }, [])
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
            {box.slice(0,1).map((item) =>
              
                <Link to = {{pathname:'/Filmes', state:item}} className='none'>
                    <div className = "BoxGrande">
                        <div className='diaSemana'>{item.diaSemana}</div>
                        <div className='diaMes'>{item.dia}</div>
                        <div className='mes'>{item.mes}</div>
                    </div>
                        </Link>
                    )}
                
                <div className = "BoxesPeq">
                   {box.slice(1,box.length).map((item) =>
                         <Link to = {{pathname:'/Filmes', state: item}} className='none'>
                        <BoxSemana
                        info={item}/>
                        </Link>
                    )}
                    
                </div>
            </div>

        </Semana>
    )
}
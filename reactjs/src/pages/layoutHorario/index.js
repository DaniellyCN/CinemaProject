import {HorarioSala} from './styled';
import CineMonk from '../../components/titulo';
import Subtitulo from '../../components/subtitulo';
import FilmeUnico from '../../components/FilmeUnico/styled';
import BoxPequena from '../../components/boxHorario';
import Api from '../../services/api'
import { useEffect, useState } from "react";



const api = new Api();


export default function LayoutHorario(){
    const [filmes, SetFilmes] = useState([])


    useEffect(() => { 
        const listar = async() => {
          const produtosr = await api.ListarHorario('2021-12-16', 'Cruella');
          
          
          SetFilmes(produtosr);
        }
        listar();
      })

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
                {filmes.map(item => 
                        <BoxPequena 
                        key={item.id}
                        info={item}
                        />
                    
                  )}    


                </div>
            </div>
        </HorarioSala>
    )
}
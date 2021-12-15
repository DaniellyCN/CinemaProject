import { ContainerFilme } from "./styled";
import Titulo from '../../components/cineMonk'
import Subtitulo from '../../components/subtitulo'
import Filme from '../../components/Filme/styled'
import {Link} from 'react-router-dom';
import Api from '../../services/api'
import { useEffect, useState } from "react";



const api = new Api();

export default function Filmes(props) {
    
    
    const [Filmes, SetFilmes] = useState(props.location.state)
    

    useEffect(() => { 
      const listar = async() => {
        const produtosr = await api.listarFilmes(Filmes.data);
        
        
        SetFilmes(produtosr);
      }
      listar();
    })

    return (
        <ContainerFilme>
            <div className="cabecalho">
                <div className="cabe1"> 
                    <div className="logo"> <img src="./assets/imagens/logo.svg" alt="" /> </div>
                    <div className="titulos"> <Titulo /> </div>
                </div>
                <div className="subtitulos"> <Subtitulo subtitulo="Selecione o filme que deseja assistir" /> </div>
            </div>
            <div className="filmes">
                {Filmes.map(item => 
                      <Link className="none" to = {{pathname:'/horarios', state:item}}>
                        <Filme 
                        key={item.id}
                        info={item}
                        />
                        </Link>
                    
                  )}    
            </div>
        </ContainerFilme>
    )
}
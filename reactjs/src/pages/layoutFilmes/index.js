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
    

<<<<<<< HEAD
export default function Filmes() {

    const [filmes, SetFilmes] = useState([])



 
 
    useEffect(() => { 
      const listar = async() => {
        const produtosr = await api.listarFilmes('2021-12-17');
=======
    useEffect(() => { 
      const listar = async() => {
        const produtosr = await api.listarFilmes(Filmes.data);
        
        
>>>>>>> 5b3625016a0c194547b4b07916f598ed165448a7
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
                {filmes.map(item => 
                        <Filme 
                        key={item.id}
                        info={item}
                        />
                    
                  )}    
            </div>
        </ContainerFilme>
    )
}
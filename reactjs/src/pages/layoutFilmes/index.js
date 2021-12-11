import { ContainerFilme } from "./styled";
import Titulo from '../../components/cineMonk'
import Subtitulo from '../../components/subtitulo'
import Filme from '../../components/Filme/styled'
export default function Filmes() {
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
                <Filme />

                <Filme />
                <Filme />
                <Filme />
                <Filme />
                <Filme />          
            </div>
        </ContainerFilme>
    )
}
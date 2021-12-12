import styled from "styled-components";

import { Link } from "react-router-dom";

const ContainerUnico = styled.div`
margin-right: 3em;
.boxFilme {
    display: flex;
    flex-direction: row;
    text-align: center;
    border: 1px solid #AA0A0A;

    background: #AA0A0A;
    box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    width: 22.3em;
    &:hover{
    cursor: pointer;
    transform: scale(1.1); 
    border-bottom-right-radius: 16px 
    }
}

img {
    max-width: 8em;
    
    margin-top: 2px;
    margin-left: 3px;
    border-top-left-radius: 16px;

}

.nomes {
    padding: 1.9em  12px;
}

.nomeFilme {
    font-size: 26px;
    font-weight: normal;
    color: #FFCA76;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 0px 6px;
    text-align: left;
    margin-bottom: 1.2em;
}

.idioma {
    font-size: 20px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 1px;
    text-align: left;

}
`

export default function Filme(props) {

    return(
        <ContainerUnico>
               
                <div className="boxFilme">
                 <div className="img-Filme"> <img src={props.info.filme.capa} alt="" /> </div> 
                 
                    <div className="nomes">
                         <div className="nomeFilme"> {props.info.filme.nome != null && props.info.filme.nome.length >= 28 ? props.info.filme.nome.substr(0, 28) + '...' : props.info.filme.nome} {/*{props.info.filme.nome} */}</div> 
                        <div className="idioma"> {props.info.filme.idiomas} <br/> {props.info.filme.classificacao}</div>
                    </div>
                </div>
        </ContainerUnico>
    )
}
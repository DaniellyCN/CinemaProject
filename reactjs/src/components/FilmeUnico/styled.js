import { useEffect, useState } from "react";
import styled from "styled-components";



const ContainerUnico = styled.div`

.boxFilme {
    text-align: center;
    border: 1px solid #AA0A0A;

    background: #AA0A0A;
    box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    width: 14.3em
}

img {
    width: 14em;
    margin-top: 2px;
}

.nomeFilme {
    font-size: 26px;
    font-weight: normal;
    color: #FFCA76;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 0px 30px;
    margin-top: 12px;
}

.idioma {
    font-size: 20px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 15px;
}
`

export default function FilmeUnicos(props) {


    return(
        <ContainerUnico>
            <div className="boxFilme">
                <div className="img-Filme"> <img src="./assets/imagens/image 13.png" alt="" /> </div>
                <div className="nomeFilme">  </div>
                <div className="idioma"> Legendado e Dublado <br/> Classificação: +12</div>
            </div>
        </ContainerUnico>
    )
}
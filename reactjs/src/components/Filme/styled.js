import styled from "styled-components";



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
    }
}

img {
    width: 8em;
    margin-top: 2px;
    margin-left: 3px;
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

export default function Filme() {

    return(
        <ContainerUnico>
            <div className="boxFilme">
                <div className="img-Filme"> <img src="./assets/imagens/image 13.png" alt="" /> </div>
                <div className="nomes">
                    <div className="nomeFilme"> Harry Potter e a Pedra Filosofal </div>
                    <div className="idioma"> Legendado e Dublado <br/>  Classificação: +12</div>
                </div>
            </div>

        </ContainerUnico>
    )
}
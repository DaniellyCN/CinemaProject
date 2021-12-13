import styled from "styled-components";

const Semana = styled.div`
width: 100%;
min-height: 100vh;
background-image: url('/assets/imagens/Fundo.png');
padding: 2em 3em;

.TituloS{
    display: flex;
    & img{margin-right: 2em}
}
.SubtituloS{
    display:flex;
    justify-content:center}

.ConteudoS{
    display: flex;
    margin-top: 3em;
    width: 100%;

    .BoxGrande{
        width: 22em;
        height: 19.2em;
        border-radius: 13px;
        background-color: rgba(198, 10, 10, 1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1em 0em;
        margin-right: 4em;
        margin-top:1em;
        .diaSemana, .mes, .diaMes{
        color:#ffffff;
        font: 2.6em SpaceMono;
        font-weight: 700;
        }
        .diaMes{
            font-size: 4.5em !important;
        }

        }.BoxesPeq{
            width: 100%;
            height: 100%;
           
            display: flex;
            justify-content: space-between;
            flex-direction:row;
           & > div {
                width: 85%;
                
                margin-bottom: 1.8em;
            }
        }
        .none{text-decoration:none;}
}

`
export {Semana}
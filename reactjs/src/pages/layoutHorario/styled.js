import styled from "styled-components";

const HorarioSala = styled.div`
width: 100%;
height: 100%;
padding: 0.7em 4em;
background-image: url('/assets/imagens/Fundo.png');

.Faixa1H{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.7em;
    width: 87%;
    .EsquerdaH{
    display: flex;
    flex-direction: row;
    & img{
        width:6em;
        height: 6em;
        margin-right:2em;
        margin-top: 1em;
    }

    }
}

.ConteudoH{
    display: flex;
    flex-direction: row;
    padding: 3em 9em;
    justify-content: space-between;
    .BoxHorario{
        display: flex;
        flex-direction: column;
        width: 60%;
        justify-content:center;
        
        & div{
            display: flex;
            justify-content: space-between;
            
        }
        > div{
            margin-bottom: 2em;
        }
    }
  
}

`
export {HorarioSala}
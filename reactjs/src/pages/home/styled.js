import styled from 'styled-components';

const Inicial = styled.div`
background-image: url('/assets/imagens/Fundo.png');
height: 100vh;
width: 100%;
padding: 2em 0em;
.TituloH{
    display: flex;
    flex-direction: column;
    align-items: center;
    & img{
        width:6em;
        height: 6em;
        margin-bottom: -1.5em;
    }
}
.Faixa2H{
    display: flex;
    flex-direction: column;
    align-items:center;
    .ConteudoH{
    
        width: 17.1em;
        height: 13em;
        border-radius: 54px;
        background-image:  linear-gradient(to bottom,rgba(134, 27, 27, 1),rgba(248, 0, 0, 1));
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.3s ease;
        & > div{
        color:white;
        font-size: 3em;
        letter-spacing: 0.1em;
        width: 80%;
        } 
       
    }
   
}
    .ConteudoH:hover{
            transform: scale(1.1);
        }
`
export {Inicial}
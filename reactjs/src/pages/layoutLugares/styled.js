import styled from 'styled-components';

const EscolherLugares = styled.div`
width: 100%;
height: 100vh;
padding: 0.7em 4em;
background-image: url('/assets/imagens/Fundo.png');

.Faixa1{
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.7em;
    width: 87%;
    .Esquerda{
    display: flex;
    flex-direction: row;
    img{margin-right:2em;}
}

}
.Conteudo{
    display: flex;
    justify-content: center;
    color:white;
    margin-left: 5em;
    .Layout{
        width: 66em;
        height: 28em;
        background-color: rgba(198, 198, 198, 0.9);
        border-radius: 10px;
        box-shadow:inset 0 0 1em rgba(0, 0, 1em, 0.25);
        padding: 1em;
    }
    .btn-botao{
        margin-top: -6em;
        margin-left: 3em;
        
    }
    .vazio{height:42px;}

}
`
export{EscolherLugares}
import styled from 'styled-components';

const ContainerTicket = styled.div`
background-image: url("./assets/imagens/fundo.png");
background-repeat: no-repeat;
min-height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
.box-cabe {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo img {
    width: 4em;
    margin-top: 1em;
    background-color: red;
}
.sub {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0px 23em;
    margin-top: -2em;
}


.conteudo {
    display: flex;
    flex-direction: row;
    align-self: center;
    margin-top: -5em;
}

.but {
    position: fixed;
    right: 1em;
    bottom: 1em;
}
`

export {ContainerTicket}


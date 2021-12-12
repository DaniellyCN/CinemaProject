import styled from 'styled-components';

const ContainerFilme = styled.div`
background-image: url("./assets/imagens/fundo.png");
min-height:  100vh;

display: flex;
flex-direction: column;



.cabecalho {
    display: flex;
    justify-content: space-between;
    padding: 0em 4em 0em 4em;
}

.cabe1  {
display: flex;
flex-direction: row;
margin-top: 2.5em;
}

.logo {
    img {
        width: 4em;
    }
}
.titulos {
margin-left: 1em;
}


.filmes {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;

    min-height: 30em;
    padding: 0em 1em 0em 7em;

  }



`
export {ContainerFilme};
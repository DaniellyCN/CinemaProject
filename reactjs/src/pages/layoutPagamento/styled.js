import styled from 'styled-components';

const ContainerPagamento = styled.div`
background-image: url("./assets/imagens/fundo.png");
height: 100vh;

display: flex;
flex-direction: column;

.cabecalho {
    display: flex;
    justify-content: space-between;
    padding: 0em 8em 0em 8em;
}

.cabe1  {
display: flex;
flex-direction: row;
}

img {
    width: 4em;
}

.titulos {
margin-left: 1em;
}

.nom-pedido {
    font-family: 'Spartan';
    font-weight: 700;
    color: rgba(255, 181, 64, 1);
    font-size: 34px;

    margin-bottom: 1em;
}

.meia, .inteira, .total {
    color: #FFFFFF;
    font-family: 'Spartan';
    font-weight: 600;
    line-height: 30px;
    font-size: 24px;
    margin-bottom: 20px;
    
}

.total {
    margin-top: 3em;
}

.box-cont {
    display: flex;
    justify-content: space-between;
    
    margin-top: 3em;
    margin-left: 32em;
    padding: 0em 2em 0em 4em;


    border: 1px solid rgba(83, 0, 0, 0.92);
    background-color: rgba(170, 10, 10, 1);
    border-radius: 10px;


    height: 20em;
    width: 40em;

 > div {
     text-align: center;
     margin-top: 2em;
 }
}

.borda {
    border: 1px solid #5A1010;
    border-radius: 10px;
    height: 16em;

}
`

export {ContainerPagamento}
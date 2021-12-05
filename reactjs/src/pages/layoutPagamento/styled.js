import styled from 'styled-components';

const ContainerPagamento = styled.div`
background-image: url("./assets/imagens/fundo.png");
min-height:  100vh;

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


.conteudo {
display: flex;
justify-content: space-between;

padding: 0em 7em 0em 12em;
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
    padding: 0em 2em 0em 4em;


    background: linear-gradient(183.2deg, #861B1B 12.34%, #F80000 148.35%);
    box-shadow: 8px 5px 5px 2px rgba(0, 0, 0, 0.25);
    border-radius: 54px;
    border: 0px solid transparent;
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

.roda {
    display: flex;
    justify-content: flex-end;

    margin-right: 8em;
    margin-top: -7em;
}
`

export {ContainerPagamento}
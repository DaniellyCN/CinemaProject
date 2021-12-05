import styled from "styled-components";



const ConteinerIng = styled.div`
display: flex;
position: relative;
background-image: url("./assets/imagens/ticket-512.svg");
height: 20em;
width: 21em;
background-repeat: no-repeat;

.xl {
    display: flex;
    flex-direction: row;
}

.box-nomes {
  position: absolute;
  top: 9em;
  left: 9em;
}
.codigo {
    color: #960404;
    font-family: 'Share Tech', sans-serif;
    font-weight: 400;

    font-size: 18px;
}

.data {
    color: #373737;
    font-family: 'Share Tech', sans-serif;
    font-weight: 400;

    font-size: 12px;
    line-height: 16px;
}

.filme {
    color: #000000;
    font-family: 'Share Tech', sans-serif;
    font-weight: 400;

    margin-top: 7px;
    margin-bottom: 7px;

    font-size: 20px;
    line-height: 23px;
    padding-right: 1em;

}

.sala {
    color: #960404;
    font-family: 'Share Tech', sans-serif;
    font-weight: 400;

    font-size: 18px;
    line-height: 15px;
}

`
export default function Ingresso(props) {
    return(
        <ConteinerIng>
                <div className='box-nomes'>
                    <div className='codigo'> A1 MEIA #864825684 </div> 
                    <div className='data'> 04/06/2021 17:02 </div>
                    <div className='filme'> Harry Potter e a Pedra Filosofal </div> 
                    <div className='sala'> Dublado  Sala 08  13:00h </div>  
                </div>
        </ConteinerIng>


    )
}
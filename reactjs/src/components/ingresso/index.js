import styled from "styled-components";



const ConteinerIng = styled.div`
display: flex;
flex-direction: column;


.box-nomes {
    position: absolute;
    top: 10em;
    left: 09em;
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

    font-size: 20px;
    line-height: 23px;
    padding-right: 54em;

}

.sala {
    color: #960404;
    font-family: 'Share Tech', sans-serif;
    font-weight: 400;

    font-size: 18px;
    line-height: 15px;
}
img {
    width: 25em;
}
`
export default function Ingresso(props) {
    return(
        <ConteinerIng>
            <div> 
                <img src="./assets/imagens/ticket.svg" alt="" />
                <div className='box-nomes'>
                <div className='codigo'> A1 MEIA #864825684 </div> 
                <div className='data'> 04/06/2021 17:02 </div>
                <div className='filme'> Harry Potter e a Pedra Filosofal </div> 
                <div className='sala'> Dublado  Sala 08  13:00h </div>  
                </div>
            </div>
        </ConteinerIng>


    )
}
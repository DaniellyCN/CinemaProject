import styled from "styled-components";



const ConteinerB = styled.div`
display: inline;

button {
    cursor: pointer;
    border-radius: 50%;
    border: none;
    height: 8em;
    width: 8em;
    background: radial-gradient(50% 50% at 50% 50%, #F4F4F4 0%, #C1C1C1 100%);
    align-items: center;
    text-align: center;

    background: radial-gradient(50% 50% at 50% 50%, #F4F4F4 0%, #C1C1C1 100%);
    h5 {
        color: #626262;

        font-family: 'Roboto';
        font-weight: 700;
        font-size: 22px;

        :hover {
        color: black;
     }
    }

    
  
}


`
export default function Botao(props) {
    return(
        <ConteinerB>
            <button> 
                <h5>{props.botao}</h5>
                <h5>{props.etapa}</h5>
            </button>
        </ConteinerB>
    )
}
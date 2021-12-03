import styled from "styled-components";



const ConteinerB = styled.div`
display: inline;
background-color: black;

button {
    margin-top: 30em;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    height: 8em;
    width: 8em;
    
    align-items: center;
    text-align: center;

    box-shadow: rgba(108, 108, 108, 0.25);

    h5 {
        color: #626262;

        font-family: Roboto;
        font-weight: 700;
        font-size: 20px;

      
    }

    h5:hover {
            color: black;
        }
}


`
export default function Subtitulo(props) {
    return(
        <ConteinerB>
            <button> 
                <h5>Concluir</h5>
            </button>
        </ConteinerB>
    )
}
import styled from "styled-components";



const Conteiner = styled.div`
display: inline;
background-color: black;

h3 {
    font-family: 'Share Tech', sans-serif;
    font-weight: 400;
    font-size: 40px;
    line-height: 54px;
    color:  #E1E1E1;
    text-shadow: 1px 1px 4px 0px #CACACA;

}
`
export default function Subtitulo(props) {
    return(
        <Conteiner>
            <h3>{props.subtitulo}</h3>
        </Conteiner>
    )
}
import styled from "styled-components";



const Conteiner = styled.div`

h3 {
    font-family: 'Share Tech', sans-serif;
    font-weight: 400;
    font-size: 40px;
    line-height: 54px;
    color:  #E1E1E1;
    text-shadow: 1px 1px 4px rgba(202, 202, 202, 0.87);

}
`
export default function Subtitulo(props) {
    return(
        <Conteiner>
            <h3>{props.subtitulo}</h3>
        </Conteiner>
    )
}
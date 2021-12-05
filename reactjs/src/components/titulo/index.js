import styled from "styled-components";



const ContainerT = styled.div`
display: inline;

h1 {
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
    font-size: 4em;
    line-height: 54px;
    color:  #F0A124;
    text-shadow: rgba(255, 255, 255, 0.5);

}
`


export default function Titulo() {
    return(
        <ContainerT>
            <h1>CineMonk</h1>
        </ContainerT>
    )
}
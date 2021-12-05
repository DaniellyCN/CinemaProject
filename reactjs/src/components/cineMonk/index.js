import styled from "styled-components";



const ContainerT = styled.div`
display: inline;

div {
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
    font-size:  48px;
    line-height: 54px;
    color:  #F0A124;

    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
}
`


export default function Titulo() {
    return(
        <ContainerT>
            <div>CineMonk</div>
        </ContainerT>
    )
}
import styled from "styled-components";

const HorizontalHF = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
.grupo1, .grupo2, .grupo3, .grupo4{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.grupo1{
    width: 5%;
}
.grupo2{
    width:22%;
}
.grupo4{
    width: 25%;
}
.grupo3{
    width: 38%;
}
`


export {HorizontalHF}
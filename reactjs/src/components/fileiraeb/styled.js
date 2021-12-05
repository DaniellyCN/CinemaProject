import styled from "styled-components";

const HorizontalEB = styled.div`
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
    align-items: flex-start;
    margin-left: -0.7em;
    .vazio{
        width: 40px;
        height: 42px;
    }
}
.grupo4{
    width: 25%;
    margin-right: -0.4em;
    .vazio{
        width: 40px;
        height: 42px;
    }
}
.grupo3{
    width: 38%;
    margin-left: 0.5em;
}
`
export {HorizontalEB}
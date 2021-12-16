import styled from 'styled-components';

const Semanal = styled.div`
width: 10em;
height: 9.6em;
border-radius: 13px;
background-color: rgba(170, 10, 10, 1);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1em 0em;
transition: .5s ease;
margin-bottom:2em;
&:hover{
    cursor: pointer;
    transform: scale(1.2);  
}
.diaSemana, .mes, .diaMes{
    color:#ffffff;
    font: 1.5em SpaceMono;
    font-weight: 700;
}
.diaMes{
    font-size: 2.5em !important;
}
`
export {Semanal}
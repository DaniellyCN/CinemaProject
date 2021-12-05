import styled from 'styled-components';

const BoxH = styled.div`
width: 10em;
height: 9.6em;
background-color: #AA0A0A;
border-radius: 13px;
padding:.5em 1.4em;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color:#fff;
transition: 0.5s ease;
&:hover{
    cursor: pointer;
    transform: scale(1.2);  
}

.sala, .audio{
    font: 1.5em SpaceMono;
    font-weight: 700;
}

.horario{
    font: 2.5em Spartan;
    font-weight: 700;
    margin:0.3em 0em 0.15em 0em;
}
`

export  {BoxH}
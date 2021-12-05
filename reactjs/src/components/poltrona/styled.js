import styled from 'styled-components';

const Cadeira = styled.div`
width: 45px;
height: 47px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
padding: 0em 1.8em;
& :hover{
    cursor: pointer;
}

.numero{
    font: 0.8em Spartan;
    color: black;
    position: absolute;
    color:white;
    font-weight: 700;
}
img{fill:green;}
`
export {Cadeira}
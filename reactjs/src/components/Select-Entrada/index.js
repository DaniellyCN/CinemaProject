import styled from "styled-components";



const ContainerSelect = styled.div`
display: flex;
.box-select {

display: flex;
flex-direction: row;
align-items: center;
    > div {
        margin-right: 1em;
        color: #ffffff;

        font-family: 'Spartan';
        font-size: 22px;
        font-weight: 700;
    }

   
}

 select, option  {
        outline: none;
        border: .1px solid black;
        padding: 3px 8px;
        border-radius: 20px;
        width: 8em;
        height: 1.7em;
        color: #4F4F4F;
        font-family: 'Roboto';
        font-size: 18px;
        font-weight: 400;
}
`

export default function SelectEntrada() {
    return (
        <ContainerSelect>
            <div className="box-select">
                <div className="nome-poltrona" style={{marginTop: '.4em'}}> A1 </div>
                <div className="select-entrada"> 
                    <select name="cars" id="cars">
                        <option value="Inteira">Inteira</option>
                        <option value="Meia">Meia</option>
                    </select>
                </div>
            </div>
        </ContainerSelect>
    )
}
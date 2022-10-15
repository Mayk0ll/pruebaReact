import styled from 'styled-components';

const Form = styled.form`
    
`;

const Label = styled.label`
    font-weight: 700;
    min-height: 40px;
    cursor: pointer;
`;

const InputTitulo = styled.input`
    min-height: 40px;
    width: 100%;
    border-radius: 3px;
`;

const ContenedorA = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    min-height: 40px;
    width: 100%;
    gap: 20px;
    margin: 20px 0; 
`;
const ContenedorB = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    min-height: 40px;
    width: 100%;
    gap: 20px;
    margin: 20px 0; 
`;

const ContenedorC = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    min-height: 40px;
    width: 100%;
    gap: 20px;
    margin: 20px 0; 
`;

const Select = styled.select`
    min-height: 40px;
    width: 100%;
    border-radius: 3px;
`;

const Campo = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    background-color: white;
    margin: auto;
    width: 1800px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black;

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`;




export {
    Form,
    Label,
    InputTitulo,
    Select,
    ContenedorA,
    ContenedorB,
    ContenedorC,
    Campo
}
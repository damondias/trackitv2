import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 30px 0 25px;

`;

const Input = styled.input`
    width: 300px;
    height: 45px;
    margin-bottom: 6px;
    padding: 10px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    
    font-size: 20px;
    line-height: 25px;

    pointer-events: ${(props) => props.disabled ? "none" : "all"};
    
    background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
    color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};

    &::placeholder{
        color: #DBDBDB;
    }
`;

const Button = styled.button`
    width: 300px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4.5px;
    
    cursor: pointer;
    pointer-events: ${(props) => props.disabled ? "none" : "all"};
    opacity: ${(props) => props.disabled ? 0.7 : 1};
    
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    
    background: #52B6FF;
    color: #FFFFFF;
`;

export {
    Form,
    Input,
    Button,

}
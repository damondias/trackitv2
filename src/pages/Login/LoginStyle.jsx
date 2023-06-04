import { Link } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const BigLogo = styled.img`
    width: 180px;
    margin-bottom: 32px;

`;

const Register = styled(Link)`
    font-size: 14px;
    line-height: 17px;
    text-decoration: underline;

    color: #52B6FF;
        
`;

export {
    PageContainer,
    BigLogo,
    Register,
}
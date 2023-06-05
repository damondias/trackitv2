import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 30px 18px;

  display: flex;
  flex-direction: column;

  background-color: #F2F2F2;
`;

const Title = styled.h2`
  font-size: 22px;
  line-height: 29px;

  padding-top: 100px;

  color: #126BA5;  
`;

const Subtitle = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
`;

export {
    Container,
    Title,
    Subtitle,
}
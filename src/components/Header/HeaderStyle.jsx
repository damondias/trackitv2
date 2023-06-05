import styled from "styled-components";

const Container = styled.header`
  width: 100vw;
  height: 70px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1;

  background: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  & > img {
    cursor: pointer;
   
  }
`;

const MiniLogo = styled.img`
    display: block;
    padding: 0px 18px;
    width: 97px;
    height: 49px;
`;

const Avatar = styled.img`
  display: block;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0px 9px 0px 0px;
`;

export {
  Container,
  MiniLogo,
  Avatar,
};
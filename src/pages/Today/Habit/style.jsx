import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 94px;

  padding: 15px;
  margin-bottom: 10px;

  background-color: #FFFFFF;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DetailsContainer = styled.div`
  width: 75%;
`;

const Title = styled.h2`
  font-size: 20px;
  line-height: 25px;

  width: 100%;

  word-break: break-all;

  margin-bottom: 7px;

  color: #666666;  
`;

const Paragraph = styled.p`
  font-size: 13px;
  line-height: 16px;

  color: #666666;
`;

const CurrentSequence = styled.span`
  margin-left: 6px;
  color: ${(props) => props.done ? "#8FC549" : "#666666"};
`;

const HighestSequence = styled.span`
  margin-left: 6px;
  color: ${(props) => props.currentSequenceIsHighest ? "#8FC549" : "#666666"};
`;

const CheckMarkContainer = styled.div`
  width: 69px;
  height: 69px;

  background-color: ${(props) => props.done ? "#8FC549" : "#EBEBEB"};

  border: 1px solid #E7E7E7;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  Container,
  DetailsContainer,
  Title,
  Paragraph,
  CurrentSequence,
  HighestSequence,
  CheckMarkContainer
}
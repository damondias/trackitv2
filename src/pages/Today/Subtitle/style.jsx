import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 17.976px;
  line-height: 22px;

  margin-bottom: 28px;

  color: ${(props) => props.doneHabitsQuantity !== 0 ? "#8FC549" : "#BABABA"};
`;

export {
    Paragraph,
}
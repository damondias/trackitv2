import React from 'react';
import { Paragraph } from './style';
import { useProgress } from '../../../hooks';

function Subtitle({ doneHabitsQuantity }) {
  const { progress } = useProgress();

  return (
    <Paragraph doneHabitsQuantity={doneHabitsQuantity}>
      {
        doneHabitsQuantity === 0
          ? "Nenhum hábito concluído ainda"
          : `${progress.toFixed(0)}% dos hábitos concluídos`
      }
    </Paragraph>
  );
}



export default Subtitle;
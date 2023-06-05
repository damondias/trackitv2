import React from 'react';
import { Container, Title } from './style';
import { Days, StyledDay } from '../HabitsStyle';
import TrashIcon from "../../../assets/dump.svg";

    
function Habit({ id, name, days, handleDeleteHabit }) {
    const weekDays = [
        { "id": 0, "day": "D" },
        { "id": 1, "day": "S" },
        { "id": 2, "day": "T" },
        { "id": 3, "day": "Q" },
        { "id": 4, "day": "Q" },
        { "id": 5, "day": "S" },
        { "id": 6, "day": "S" }
    ]

    return (
        <Container>
        <Title>{name}</Title>
        <Days>
            {weekDays.map(weekDay => (
            <StyledDay key={weekDay.id} isSelected={days.includes(weekDay.id)}>{weekDay.day}</StyledDay>
            ))}
        </Days>

        <img alt="Trash" src={TrashIcon} onClick={() => handleDeleteHabit(id)} />
        </Container>
    );
}

export default Habit;
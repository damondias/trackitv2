import React, { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Form, Container, Input, Footer, CloseButton, SaveButton } from './style';
import { Days, StyledDay } from '../HabitsStyle';
import { useAuth } from '../../../hooks';
import api from '../../../services/api';


const weekDays = [
    { "id": 0, "day": "D" },
    { "id": 1, "day": "S" },
    { "id": 2, "day": "T" },
    { "id": 3, "day": "Q" },
    { "id": 4, "day": "Q" },
    { "id": 5, "day": "S" },
    { "id": 6, "day": "S" }
]

function Day({ day, id, isSelected, handleSelectDay }) {
    return (
      <StyledDay
        onClick={() => handleSelectDay(id)}
        isSelected={isSelected}
        data-test="habit-day" 
      >
        {day}
      </StyledDay>
    );
}

function CreateHabitForm({ isOpen, closeForm, loadHabits }) {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [days, setDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleCreateHabit(e) {
    e.preventDefault();

    if (days.length === 0) {
      alert("Pelo menos um dia precisa ser selecionado");
      return;
    }

    if (name.length === 0) {
      alert("Digite algum Hábito");
      return;
    }

    setIsLoading(true);

    const promise = api.createHabit({ name, days }, user.token);
    promise.then(() => {
      setIsLoading(false);
      setName('');
      setDays([]);
      closeForm();
      loadHabits();
    });
    promise.catch((error) => {
      setIsLoading(false);
      console.log(error.response);
      
    });
  }

  function handleSelectDay(id) {
    const isDaySelected = days.includes(id);

    if (isDaySelected) {
      const newDays = days.filter(day => day !== id);
      setDays(newDays);
      return;
    }

    setDays([...days, id]);
  }

  return (
    <Form onSubmit={handleCreateHabit} isOpen={isOpen} data-test="habit-create-container">
      <Container>
        <Input
          placeholder="nome do hábito"
          onChange={(e) => setName(e.target.value)}
          value={name}
          disabled={isLoading}
          data-test="habit-name-input"
        />
        <Days disabled={isLoading}>
          {weekDays.map((weekDay) => (
            <Day
              key={weekDay.id}
              {...weekDay}
              isSelected={days.includes(weekDay.id)}
              handleSelectDay={handleSelectDay}
             
            />
          ))}
        </Days>
      </Container>

      <Footer>
        <CloseButton type="button" disabled={isLoading} onClick={closeForm} data-test="habit-create-cancel-btn">
          Cancelar
        </CloseButton>
        <SaveButton type="submit" disabled={isLoading} data-test="habit-create-save-btn">
          {
            isLoading
              ? <ThreeDots color="#FFFFFF" height={50} width={50} />
              : "Salvar"
          }
        </SaveButton>
      </Footer>
    </Form>
  );
}

export default CreateHabitForm;
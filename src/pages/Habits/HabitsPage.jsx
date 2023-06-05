import { useState, useEffect } from "react";
import { Container, RegisterContent, Title, Button } from "./HabitsStyle";
import Plus from "../../assets/plus.svg";

import api from "../../services/api";

import { useAuth, useProgress } from "../../hooks";
import CreateHabitForm from "./CreatehabitForm";
import HabitsList from "./HabitList";


function HabitsPage() {
  const { user } = useAuth();
  const { updateProgress } = useProgress();
  const [habits, setHabits] = useState(null);
  const [isCreateHabitFormOpen, setIsCreatingHabitFormOpen] = useState(false);

  function loadHabits() {
    const promise = api.getHabits(user.token);
    promise.then((response) => {
      setHabits(response.data);
      loadTodayHabits();
    });
    promise.catch((error) => {
      console.log(error.response);
    });
  }

  function loadTodayHabits() {
    const promise = api.getTodayHabits(user.token);

    promise.then((response) => {
      const doneHabits = response.data.filter(habit => habit.done);

      updateProgress(doneHabits.length, response.data.length);
    });
  }

  function handleDeleteHabit(id) {
    if (!window.confirm("Você tem certeza que deseja deletar este hábito?")) {
      return;
    }

    const promise = api.deleteHabit(id, user.token);
    promise.then(() => {
      loadHabits();
      loadTodayHabits();
    });
  }

  useEffect(loadHabits, []);

  if (habits === null) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <RegisterContent>
        <Title>Meus hábitos</Title>
        <Button onClick={() => setIsCreatingHabitFormOpen(true)}>
          <img alt="plus.svg" src={Plus} />
        </Button>
      </RegisterContent>

      <CreateHabitForm
        isOpen={isCreateHabitFormOpen}
        closeForm={() => setIsCreatingHabitFormOpen(false)}
        loadHabits={loadHabits}
      />

      <HabitsList habits={habits} handleDeleteHabit={handleDeleteHabit} />
    </Container>
  );
}
export default HabitsPage;
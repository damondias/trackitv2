import { useState, useEffect } from "react";
import { Container, Content } from "./TodayStyle";
import { useAuth, useProgress } from "../../hooks";
import api from "../../services/api";

import Date from "./Date";
import Habit from "./Habit";
import Subtitle from "./Subtitle";

function TodayPage() {
  const { user } = useAuth();
  const { updateProgress } = useProgress();
  const [habits, setHabits] = useState(null);
  const [doneHabitsQuantity, setDoneHabitsQuantity] = useState(0);

  function loadTodayHabits() {
    const promise = api.getTodayHabits(user.token);

    promise.then((response) => {
      const apiHabits = response.data;
      setHabits(apiHabits);

      const doneHabits = apiHabits.filter(habit => habit.done);
      updateProgress(doneHabits.length, apiHabits.length);
      setDoneHabitsQuantity(doneHabits.length);
    });
  }

  useEffect(loadTodayHabits, []);

  if (habits === null) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <Content>
        <Date />
        <Subtitle doneHabitsQuantity={doneHabitsQuantity} />
        {habits.map(habit => (
          <Habit
            key={habit.id}
            {...habit}
            loadTodayHabits={loadTodayHabits}
           
          />
        ))}
      </Content>
    </Container>
  );
}

export default TodayPage;
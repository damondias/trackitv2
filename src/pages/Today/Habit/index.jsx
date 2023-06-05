import Check from "../../../assets/check.svg";
import { Container, DetailsContainer, Title, Paragraph, CurrentSequence, HighestSequence,  CheckMarkContainer } from "./style";

import api from "../../../services/api";
import { useAuth } from "../../../hooks";

function Habit({ id, name, done, currentSequence, highestSequence, loadTodayHabits}) {
    const { user } = useAuth();
    const currentSequenceIsHighest = currentSequence > 0 && currentSequence === highestSequence;

    function formatDayText(quantity) {
        if (quantity === 1) return 'dia';

        return 'dias';
    }

    function handleCheckHabit() {
        if (done) {
            const promise = api.uncheckHabit(id, user.token);
            promise.then(() => {
                loadTodayHabits();
            });

            return;
        }

        const promise = api.checkHabit(id, user.token);
        promise.then(() => {
        loadTodayHabits();
        });
    }

    return (
        <Container>
            <DetailsContainer>
                <Title  data-test="today-habit-name">
                    {name}
                </Title>
                <Paragraph data-test="today-habit-sequence">
                    Sequência atual:
                    <CurrentSequence done={done}>
                        {currentSequence} {formatDayText(currentSequence)}
                    </CurrentSequence>
                </Paragraph>
                <Paragraph data-test="today-habit-record">
                    Seu recorde:
                    <HighestSequence currentSequenceIsHighest={currentSequenceIsHighest}>
                        {highestSequence} {formatDayText(highestSequence)}
                    </HighestSequence>
                </Paragraph>
            </DetailsContainer>

            <CheckMarkContainer
                done={done}
                onClick={handleCheckHabit}
                data-test="today-habit-check-btn"
            >
                <img alt="check" src={Check} />
            </CheckMarkContainer>
        </Container>
    );
}

export default Habit;
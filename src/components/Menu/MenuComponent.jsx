import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link, useLocation } from "react-router-dom";
import { useProgress } from "../../hooks";

import { Footer, Redirect, ContentProgressbar, CircularProgressbarContainer } from "./MenuStyle";

function Menu() {
  const { progress } = useProgress();
  const location = useLocation();
  const paths = ['/', '/cadastro'];

  if (paths.includes(location.pathname)) {
    return null;
  }

  return (
    <Footer  data-test="menu">
      <Redirect to="/habitos" data-test="habit-link" >Hábitos</Redirect>
      <ContentProgressbar>
        <CircularProgressbarContainer>
          <Link to="/hoje"  data-test="today-link">
            <CircularProgressbar
              value={progress}
              text={"Hoje"}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
              })}
            />
          </Link>
        </CircularProgressbarContainer>
      </ContentProgressbar>
      <Redirect to="/historico" data-test="history-link">Histórico</Redirect>
    </Footer>
  );
}

export default Menu;
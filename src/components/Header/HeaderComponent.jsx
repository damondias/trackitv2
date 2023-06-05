import { Container, Avatar, MiniLogo } from "./HeaderStyle";
import logo from "../../assets/logo-mini.svg";
import { useAuth } from "../../hooks";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const paths = ['/', '/cadastro'];

  if (paths.includes(location.pathname)) {
    return null;
  }

  return (
    <Container  data-test="header">
      <MiniLogo src={logo} alt="TrackIt" onClick={() => navigate("/hoje")} />
      <Avatar src={user.image} alt={user.name} data-test="avatar"/>
    </Container>
  );
}

export default Header;
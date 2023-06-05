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
    <Container>
      <MiniLogo src={logo} alt="TrackIt" onClick={() => navigate("/hoje")} />
      <Avatar src={user.image} alt={user.name} />
    </Container>
  );
}

export default Header;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/useContext";
import { LoginPage, SignUpPage, TodayPage, HabitsPage, HistoricPage } from "./pages";
import Header from "./components/Header/HeaderComponent";
import { ProgressProvider } from "./contexts/progressContext";
import Menu from "./components/Menu/MenuComponent";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <ProgressProvider>
          <Header />
          <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/cadastro" element={<SignUpPage />} />
              <Route path="/hoje" element={<TodayPage />} />
              <Route path="/habitos" element={<HabitsPage />} />
              <Route path="/historico" element={<HistoricPage />} /> 
          </Routes>
          <Menu />
        </ProgressProvider>
      </AuthProvider>
    </BrowserRouter>  
  )
}

export default App

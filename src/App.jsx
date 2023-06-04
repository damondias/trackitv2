import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import { AuthProvider } from "./contexts/useContext";
import SignUpPage from "./pages/SignUp/SignUpPage";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
             {/* <Route path="/hoje" element={<TodayPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/historico" element={<HistoricPage />} /> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>  
  )
}

export default App

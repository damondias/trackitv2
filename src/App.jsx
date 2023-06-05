import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/useContext";
import { LoginPage, SignUpPage, TodayPage } from "./pages";
import Header from "./components/Header/HeaderComponent";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/hoje" element={<TodayPage />} />
            {/* <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/historico" element={<HistoricPage />} /> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>  
  )
}

export default App

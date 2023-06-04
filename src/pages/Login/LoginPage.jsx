import { BigLogo, PageContainer, Register } from "./LoginStyle";
import Logo from "../../assets/logo.svg"
import { Button, Form, Input } from "../../components/Form/FormComponent";
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks";
import api from "../../services/api";


function LoginPage (){

    const [formData, setFormData] = useState({ email: '', password: '' })
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useAuth();
    const navigate = useNavigate();

    function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      setIsLoading(true);
      const promise = api.login({ ...formData });
      promise.then((response) => {
        setIsLoading(false);
  
        setUser(response.data);
        navigate("/today");
      });
      promise.catch((error) => {
        setIsLoading(false);
        console.log(error);
        alert('Erro, tente novamente');
      });
    }
  
    return (
        <PageContainer>
            <BigLogo src={Logo} alt ="TrackIt" />
            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    disabled={isLoading}
                    required
                />
                <Input 
                    type="password"
                    placeholder="senha"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    disabled={isLoading}
                    required
                />
                <Button type="submit" disabled={isLoading}>
                    {
                        isLoading? <ThreeDots color="#FFFFFF" height={50} width={50} /> : "Entrar"
                    }
                </Button>
            </Form>
            <Register to="/cadastro">
                Não tem uma conta? Cadastre-se!
            </Register>
        </PageContainer>
    )
}

export default LoginPage;
import { BigLogo, PageContainer, Register } from "./SignUpStyle";
import Logo from "../../assets/logo.svg"
import { Button, Form, Input } from "../../components/Form/FormComponent";
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

function SignUpPage (){

    const [formData, setFormData] = useState({
        email: '', 
        password: '', 
        name: '', 
        image: ''
    })
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      setIsLoading(true);
      const promise = api.signUp({ ...formData });
      promise.then((response) => {
        setIsLoading(false);
        navigate("/");
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
                    data-test="email-input"
                />
                <Input 
                    type="password"
                    placeholder="senha"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    disabled={isLoading}
                    required
                    data-test="password-input" 
                />
                <Input
                    type="text"
                    placeholder="nome"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    disabled={isLoading}
                    required
                    data-test="user-name-input"
                />
                <Input
                    type="text"
                    placeholder="foto"
                    name="image"
                    onChange={handleChange}
                    value={formData.image}
                    disabled={isLoading}
                    required
                    data-test="user-image-input"
                />
                <Button type="submit" disabled={isLoading} data-test="signup-btn">
                    {
                        isLoading? <ThreeDots color="#FFFFFF" height={50} width={50} /> : "Cadastrar"
                    }
                </Button>
            </Form>
            <Register to="/" data-test="login-link">
                Já tem uma conta? Faça login!
            </Register>
        </PageContainer>
    )
}

export default SignUpPage;
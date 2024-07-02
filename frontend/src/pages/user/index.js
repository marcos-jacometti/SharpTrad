import React, { useState } from "react";
import { Btn, Container, UserContainer, UserLogin, StyledToast } from "./styles";
import Header from "../../components/common/header";
import Input from "../../components/common/input";
import { FaLock, FaUserAlt } from "react-icons/fa";
import Button from "../../components/common/button";
import SignUp from "../../components/specific/userComponents";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { handleLogin } from "../../services/controllers/handleLogin";

export default function User() {
    const [visible, setVisible] = useState(false);

    const handleBtnClick = () => {
        setVisible(true);
    }

    const notify = (message, type) => {
        toast(message, { type: type });
    };

    const handleClick = async () => {
        try {
            await handleLogin();
            notify("Login realizado com sucesso", "success");
        } catch (error) {
            notify("Erro ao fazer login", "error");
        }
    }

    return (
        <UserContainer>
            <Header />
            <Container>
                <UserLogin>
                    <h3>Já tem uma conta? Faça seu login</h3>
                    <div className="login">
                        <Input id="name" icon={<FaUserAlt />} placeholder="Usuário" type="text" />
                        <Input id="password" icon={<FaLock />} placeholder="Senha" type="password" />
                        <Button onClick={handleClick} title="ENTRAR" />
                        <StyledToast position="bottom-left" />
                        <Btn>
                            <button onClick={handleBtnClick}>
                                <h4>Ainda não tem uma conta? Clique aqui!</h4>
                            </button>
                            {visible && <SignUp visible={visible} setVisible={setVisible} />}
                        </Btn>
                    </div>
                </UserLogin>
            </Container>
        </UserContainer>
    );
}
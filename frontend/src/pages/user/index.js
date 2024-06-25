import React, { useState } from "react";
import { Btn, Container, UserContainer, UserLogin } from "./styles";
import Header from "../../components/common/header";
import Input from "../../components/common/input";
import { FaLock, FaUserAlt } from "react-icons/fa";
import Button from "../../components/common/button";
import SignUp from "../../components/specific/userComponents";

export default function User(){
    const [visible, setVisible] = useState(false);

    const handleBtnClick = () => {
        setVisible(true);
    }

    return(
        <UserContainer>
            <Header />
            <Container>
                <UserLogin>
                    <h3>Já tem uma conta? Faça seu login</h3>
                    <div className="login">
                        <Input icon={<FaUserAlt />} placeholder="Usuário" type="text" />
                        <Input icon={<FaLock />} placeholder="Senha" type="password" />
                        <Button title="ENTRAR"/>
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
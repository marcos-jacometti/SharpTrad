import React, { useState } from "react";
import { Close, Container, Info, StyledToast, Up } from "./styles";
import { IoClose } from "react-icons/io5";
import Input from "../../common/input";
import Button from "../../common/button";
import { FaKey, FaLock, FaUserAlt, FaUserShield } from "react-icons/fa";
import { handleCreateUser } from "../../../services/controllers/handleCreateUser";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp({ visible, setVisible }) {
    const [key, setKey] = useState("");
    const [user, setUser] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleKey = (e) => {
        const keyValue = e.target.value;
        setKey(keyValue);

        if (keyValue === "sharpbotProUser") {
            setUser("Plano Pro");
        } else if (keyValue === "sharpbotExpertUser") {
            setUser("Plano Expert");
        } else {
            setUser("");
        }
    };

    const notify = (message, type) => {
        toast(message, { type: type });
    };

    const handleClick = async () => {
        try {
            if (key === "sharpbotProUser" || key === "sharpbotExpertUser") {
                await handleCreateUser(name, password, user);
                notify("Usuário criado com sucesso", "success");
            } else {
                notify("Chave de acesso inválida", "error");
                return;
            }
        } catch (error) {
            notify("Falha ao criar o usuário", "error");
        }
    };

    return (
        <Container $visible={visible}>
            <Up>
                <Close>
                    <button onClick={() => setVisible(false)}>
                        <IoClose />
                    </button>
                </Close>
                <h3>Crie agora sua conta!</h3>
                <Info>
                    <Input
                        id="name"
                        icon={<FaUserAlt />}
                        placeholder="Nome de usuário"
                        type="text"
                        readOnly={false}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        id="password"
                        icon={<FaLock />}
                        placeholder="Digite sua senha"
                        type="password"
                        readOnly={false}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        icon={<FaKey />}
                        placeholder="Digite sua chave de acesso"
                        readOnly={false}
                        value={key}
                        onChange={handleKey}
                    />
                    <Input
                        id="type"
                        icon={<FaUserShield />}
                        placeholder="Tipo de usuário"
                        readOnly={true}
                        value={user}
                    />
                    <Button title="CRIAR" onClick={handleClick} />
                    <StyledToast position="bottom-left" />
                </Info>
            </Up>
        </Container>
    );
}
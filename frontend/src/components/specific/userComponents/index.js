import React, { useState } from "react";
import { Close, Container, Info, Up } from "./styles";
import { IoClose } from "react-icons/io5";
import Input from "../../common/input";
import Button from "../../common/button";
import { FaKey, FaLock, FaUserAlt } from "react-icons/fa";
import Select from "./select";

export default function SignUp({visible, setVisible}){
    return(
        <Container $visible={visible}>
            <Up>
                <Close>
                    <button onClick={() => setVisible(false)}>
                        <IoClose />
                    </button>
                </Close>
                <h3>Crie agora sua conta!</h3>
                <Info>
                    <Input icon={<FaUserAlt />} placeholder="Nome de usuário" type="text" />
                    <Input icon={<FaLock />} placeholder="Digite sua senha" type="password" />
                    <Input icon={<FaKey />} placeholder="Digite sua chave de acesso" />
                    <Select />
                    <Button title="CRIAR" />
                </Info>
            </Up>
        </Container>
    );
}
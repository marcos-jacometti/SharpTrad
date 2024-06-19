import React from "react";
import { Container, Notify, NotifyContainer } from "./styles";
import Header from "../../components/common/header";
import { MdOutlineNotificationsActive } from "react-icons/md";

export default function Notifications(){
    return(
        <Container>
            <Header />
            <NotifyContainer>
                <Notify>
                    <div className="title">
                        <MdOutlineNotificationsActive />
                        <h2>Notificações</h2>
                    </div>
                </Notify>
            </NotifyContainer>
        </Container>
    );
}
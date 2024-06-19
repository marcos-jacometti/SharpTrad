import React from "react";
import { TransmitionsContainer, Container, Live } from "./styles";
import Header from "../../../components/common/header";
import { RiLiveLine } from "react-icons/ri";

export default function Transmitions(){
    return(
        <TransmitionsContainer>
            <Header />
            <Container>
                <Live>
                    <RiLiveLine />
                    <h2>Nenhuma transmissão disponível</h2>
                </Live>
            </Container>
        </TransmitionsContainer>
    );
}
import React from "react";
import { Background, Container, Details, DivStyled } from "./styles";
import { BsGraphUpArrow, BsHourglassSplit, BsAlarmFill } from "react-icons/bs";
import { IoWarning } from "react-icons/io5";

export default function Bet({}){
    return(
        <Container>
            <Background>
                <BsGraphUpArrow />
            </Background>
            <Details>
                <DivStyled $justify="center">
                    <h5>GBP/JPY</h5>
                </DivStyled>
                <DivStyled>
                    <BsHourglassSplit />
                    <h5>Tempo de Expiração: 5 min</h5>
                </DivStyled>
                <DivStyled>
                    <BsAlarmFill />
                    <h5>Horário da Entrada: 12h15</h5>
                </DivStyled>
                <DivStyled>
                    <IoWarning />
                    <h5>Utilizar até 2 gales</h5>
                </DivStyled>
            </Details>
        </Container>
    );
}
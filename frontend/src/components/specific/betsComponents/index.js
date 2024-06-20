import React from "react";
import { Background, Container, Details } from "./styles";
import { BsGraphUpArrow, BsHourglassSplit, BsAlarmFill } from "react-icons/bs";
import { IoWarning } from "react-icons/io5";

export default function Bet({}){
    return(
        <Container>
            <Background>
                <BsGraphUpArrow />
            </Background>
            <Details>
                <div>
                    <h3>GBP/JPY</h3>
                </div>
                <div>
                    <BsHourglassSplit />
                    <h3>Tempo de Expiração: 5 min</h3>
                </div>
                <div>
                    <BsAlarmFill />
                    <h3>Horário da Entrada: 12h15</h3>
                </div>
                <div>
                    <IoWarning />
                    <h3>Utilizar até 2 gales</h3>
                </div>
            </Details>
        </Container>
    );
}
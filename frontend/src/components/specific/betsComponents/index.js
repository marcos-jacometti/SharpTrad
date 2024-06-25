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
                    <h5>GBP/JPY</h5>
                </div>
                <div>
                    <BsHourglassSplit />
                    <h5>Tempo de Expiração: 5 min</h5>
                </div>
                <div>
                    <BsAlarmFill />
                    <h5>Horário da Entrada: 12h15</h5>
                </div>
                <div>
                    <IoWarning />
                    <h5>Utilizar até 2 gales</h5>
                </div>
            </Details>
        </Container>
    );
}
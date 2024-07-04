import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Background, Container, Details, DivStyled } from './styles';
import { BsGraphUpArrow, BsGraphDownArrow, BsHourglassSplit, BsAlarmFill } from 'react-icons/bs';
import { IoWarning } from 'react-icons/io5';

// Função auxiliar para formatar a hora
const formatTime = (timeString) => {
    const [hour, minute] = timeString.split(':');
    return `${hour}:${minute}`;
};

export default function Bet({ index }) {
    const [signal, setSignal] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/signals')
            .then(response => {
                if (response.data.length > index) {
                    setSignal(response.data[index]);
                }
            })
            .catch(error => {
                console.error('Error fetching signals:', error);
            });
    }, [index]);

    if (!signal) {
        return <div>Loading...</div>;
    }

    const { command, coin, hour, date } = signal;

    return (
        <Container>
            <Background>
                {command === 'buy' ? <BsGraphUpArrow color="green" /> : <BsGraphDownArrow color="red" />}
            </Background>
            <Details>
                <DivStyled $justify="center">
                    <h5>{coin}</h5>
                </DivStyled>
                <DivStyled>
                    <BsHourglassSplit />
                    <h5>Tempo de Expiração: 5 min</h5>
                </DivStyled>
                <DivStyled>
                    <BsAlarmFill />
                    <h5>Horário da Entrada: {formatTime(hour)}</h5>
                </DivStyled>
                <DivStyled>
                    <IoWarning />
                    <h5>Utilizar até 2 gales</h5>
                </DivStyled>
            </Details>
        </Container>
    );
}
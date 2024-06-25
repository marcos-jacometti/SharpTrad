import React from "react";
import { BetsContainer, Container, BetsSignals, GamesContent } from "./styles";
import Header from "../../components/common/header";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import Bet from "../../components/specific/betsComponents";

export default function Bets(){
    return(
        <BetsContainer>
            <Header />
            <GamesContent>
                <Container>
                    <div className="title">
                        <IoExtensionPuzzleOutline />
                        <h3>Sinais Automáticos</h3>
                    </div>
                    <BetsSignals>
                        <Bet />
                        <Bet />
                        <Bet />
                        <Bet />
                        <Bet />
                        <Bet />
                        <Bet />
                        <Bet />
                        <Bet />
                        <Bet /> 
                    </BetsSignals>
                </Container>
            </GamesContent>
        </BetsContainer>
    );
}
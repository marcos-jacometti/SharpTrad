import React from "react";
import { BetsContainer, Container, Games, GamesContent } from "./styles";
import Header from "../../components/common/header";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import Game from "../../components/specific/games";

export default function Bets(){
    return(
        <BetsContainer>
            <Header />
            <GamesContent>
                <Container>
                    <div className="title">
                        <IoExtensionPuzzleOutline />
                        <h2>Sinais Automáticos</h2>
                    </div>
                    <Games>
                        <Game />
                    </Games>
                </Container>
            </GamesContent>
        </BetsContainer>
    );
}
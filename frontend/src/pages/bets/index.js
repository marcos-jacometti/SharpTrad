import React from "react";
import { BetsContainer, Container, Games, GamesContent } from "./styles";
import Header from "../../components/common/header";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import Game from "../../components/specific/games";
import images from "../../services/utils/loadImg";

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
                        <Game background={images['mines.png']} name="Mines" />
                        <Game background={images['mines.png']} name="Fortune tiger" />
                        <Game background={images['mines.png']} name="Penalty Shootout" />
                        <Game background={images['mines.png']} name="Fortune Rabbit" />
                        <Game background={images['mines.png']} name="Roleta A" />
                        <Game background={images['mines.png']} name="Roleta Brasileira" />
                        <Game background={images['mines.png']} name="Fruit Ninja" />
                        <Game background={images['mines.png']} name="Fortune Mouse" />
                        <Game background={images['mines.png']} name="Spaceman" />
                    </Games>
                </Container>
            </GamesContent>
        </BetsContainer>
    );
}
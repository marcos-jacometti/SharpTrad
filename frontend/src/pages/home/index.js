import React from "react";
import Header from "../../components/common/header";
import { Announcement, Board, Boards, Container, Content } from "./styles";
import { Link } from "react-router-dom";

export default function HomeContainer(){
    return(
        <Container>
            <Header />
            <Content>
                <Boards>
                    <Link to="https://trade.avalonbroker.io/register?aff=415320&aff_model=revenue&afftrack="><Announcement /></Link>
                    <Board $height="50vh" $width="50vw"></Board>
                    <Board $height="50vh" $width="17vw"></Board>
                    <Board $height="40vh" $width="30vw"></Board>
                    <Board $height="40vh" $width="30vw"></Board>
                    <Board $height="70vh" $width="70vw"></Board>
                </Boards>
            </Content>
        </Container>
    );
}
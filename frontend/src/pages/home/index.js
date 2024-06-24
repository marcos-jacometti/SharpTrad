import React from "react";
import Header from "../../components/common/header";
import { Board, Container, Content } from "./styles";

export default function HomeContainer(){
    return(
        <Container>
            <Header />
            <Content>
                <Board $height="65vh" $width="50vw"></Board>
                <Board $height="65vh" $width="40vw"></Board>
            </Content>
        </Container>
    );
}
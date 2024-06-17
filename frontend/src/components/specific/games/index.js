import React from "react";
import { Container, Image } from "./styles";

export default function Game({background, name}){
    return(
        <Container>
            <Image $background={background}/>
            <h3>{name}</h3>
        </Container>
    );
}
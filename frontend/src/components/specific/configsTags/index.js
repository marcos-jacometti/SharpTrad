import React from "react";
import { Container } from "./styles";

export default function Tag({title, description}){
    return(
        <Container>
            <h3>{title}</h3>
            <span>{description}</span>
        </Container>
    );
}
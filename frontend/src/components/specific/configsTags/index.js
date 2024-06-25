import React from "react";
import { Container } from "./styles";

export default function Tag({title, description}){
    return(
        <Container>
            <h4>{title}</h4>
            <span>{description}</span>
        </Container>
    );
}
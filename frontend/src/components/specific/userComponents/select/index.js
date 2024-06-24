import React from "react";
import { Container } from "./styles";
import { FaRobot } from "react-icons/fa";

export default function Select(){
    return(
        <Container>
            <FaRobot />
            <select required>
                <option selected disabled>Como nos conheceu?</option>
                <option>Instagram SharpBot</option>
                <option>LinkedIn</option>
            </select>
        </Container>
    );
}
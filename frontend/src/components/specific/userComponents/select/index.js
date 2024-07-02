import React from "react";
import { Container } from "./styles";
import { FaRobot } from "react-icons/fa";

export default function Select({value, onChange}){
    return(
        <Container>
            <FaRobot />
            <select value={value} onChange={onChange} required defaultValue="">
                <option value="" disabled>Como nos conheceu?</option>
                <option value="1">Instagram SharpBot</option>
                <option value="2">LinkedIn</option>
            </select>
        </Container>
    );
}
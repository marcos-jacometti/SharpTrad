import React, { useState } from "react";
import { Container, Content } from "../styles";
import { FaRobot } from "react-icons/fa";
import Button from "../../button";

export default function SelectExpert() {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const getButtonLink = () => {
        if (value === "1") {
            return "https://pay.kirvano.com/34576e44-a5a0-4011-9486-f611ca2c9682";
        } else if (value === "2") {
            return "https://pay.kirvano.com/34576e44-a5a0-4011-9486-f611ca2c9682";
        }
        return "https://pay.kirvano.com/34576e44-a5a0-4011-9486-f611ca2c9682";
    };

    return (
        <Content>
            <Container>
                <FaRobot />
                <select value={value} onChange={handleChange} required>
                    <option value="" disabled>Como nos conheceu?</option>
                    <option value="1">Instagram SharpBot</option>
                    <option value="2">LinkedIn</option>
                </select>
            </Container>
            <Button link={getButtonLink()} title="ASSINAR" />
        </Content>
    );
}
import React, { useState } from "react";
import { Container, Content } from "./styles";
import { FaRobot } from "react-icons/fa";
import Button from "../button";

export default function Select() {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const getButtonLink = () => {
        if (value === "1") {
            return "link-x";
        } else if (value === "2") {
            return "link-y";
        }
        return "";
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
import React, { useState } from "react";
import { Container, Content } from "../styles";
import { FaRobot } from "react-icons/fa";
import Button from "../../button";

export default function SelectPro() {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const getButtonLink = () => {
        if (value === "1") {
            return "https://pay.kirvano.com/e89706bf-26ad-406e-837e-cde7b19faaa5";
        } else if (value === "2") {
            return "https://pay.kirvano.com/e89706bf-26ad-406e-837e-cde7b19faaa5";
        }
        return "https://pay.kirvano.com/e89706bf-26ad-406e-837e-cde7b19faaa5";
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
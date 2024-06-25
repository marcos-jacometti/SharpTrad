import React from "react";
import { Container, Description, List } from "./styles";

export default function PayContainer({title, h4, h2, h3, items, button}){
    return(
        <Container>
            <Description>
                <h3>{title}</h3>
                <div>
                    <h4>{h4}</h4>
                    <h2>{h2}</h2>
                    <h3>{h3}</h3>
                </div>
            </Description>
            <List>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </List>
            {button}
        </Container>
    );
}
import React from "react";
import { Container, Count, Image } from "./styles";
import { Link } from "react-router-dom";

export default function Game({link, background, name}){
    const number = Math.floor(Math.random() * (99 - 84 + 1)) + 84;

    return(
        <Container>
            <button>
               <Link to={link} className="link">
                    <Image $background={background}/>
                    <h3>{name}</h3>
                    <Count>
                        <span>Assertividade</span>
                        <span>{number}%</span>
                    </Count>
               </Link>
            </button>
        </Container>
    );
}
import React from "react";
import { ButtonContainer } from "./styles";
import { Link } from "react-router-dom";

export default function Button({link, title}){
    return(
        <ButtonContainer>
            <button>
                <Link to={link} className="link">
                    {title}
                </Link>
            </button>
        </ButtonContainer>
    );
}
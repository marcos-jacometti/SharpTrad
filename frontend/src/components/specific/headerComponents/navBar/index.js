import React from "react";
import { NavBarContainer } from "./styles";
import { Link } from "react-router-dom";

export default function NavBar({onClick, link, svg, title, arrow, children}){
    return(
        <NavBarContainer>
            <button onClick={onClick}>
                <Link to={link} className="link">
                    {svg}
                    <span>{title}</span>
                    {arrow}
                </Link>
            </button>
            {children}
        </NavBarContainer>
    );
}
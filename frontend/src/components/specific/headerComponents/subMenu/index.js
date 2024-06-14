import React from "react";
import { SubMenuContainer } from "./styles";
import { Link } from "react-router-dom";

export default function SubMenu({link, linkTwo}){
    return(
        <SubMenuContainer>
            <Link to="" className="link">
                {link}
            </Link>
            <Link to="" className="link">
                {linkTwo}
            </Link>
        </SubMenuContainer>
    );
}
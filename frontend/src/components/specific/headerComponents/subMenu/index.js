import React from "react";
import { SubMenuContainer } from "./styles";
import { Link } from "react-router-dom";

export default function SubMenu({link, linkTwo, title, titleTwo}){
    return(
        <SubMenuContainer>
            <Link to={link} className="link">
                {title}
            </Link>
            <Link to={linkTwo} className="link">
                {titleTwo}
            </Link>
        </SubMenuContainer>
    );
}
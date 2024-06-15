import React from "react";
import { SubMenuContainer } from "./styles";
import { Link, useLocation } from "react-router-dom";

export default function SubMenu({link, linkTwo, title, titleTwo}){
    const location = useLocation();
    const isActive = location.pathname === link;

    return(
        <SubMenuContainer isActive={isActive}>
            <Link to={link} className="link">
                {title}
            </Link>
            <Link to={linkTwo} className="link">
                {titleTwo}
            </Link>
        </SubMenuContainer>
    );
}
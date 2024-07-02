import React, { useState } from "react";
import { HeaderContainer } from "./styles";
import Logo from "../../../specific/headerComponents/logo";
import NavBar from "../../../specific/headerComponents/navBar";
import { LuHome, LuUserCircle2 } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { IoFileTrayFullOutline, IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SubMenu from "../../../specific/headerComponents/subMenu";
import HelpCenter from "../../../specific/headerComponents/helpCenter";

export default function DesktopHeader() {
    const [visibility, setVisibility] = useState({
        settings: false,
        resources: true
    });

    const handleToggle = (section) => {
        setVisibility(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <HeaderContainer>
            <Logo height="12vh" width="16vw" />
            <nav>
                <NavBar link="/" svg={<LuHome />} title="Visão geral" />
                <NavBar link="/signals" svg={<MdOutlineAttachMoney />} title="Lista de Sinais" />
                <NavBar 
                    onClick={() => handleToggle('settings')}
                    svg={<GoGear />}
                    title="Configurações do app"
                    arrow={visibility.settings ? <IoIosArrowUp /> : <IoIosArrowDown />}
                >
                    {visibility.settings && <SubMenu link="/plans" linkTwo="/configs" title="Planos" titleTwo="Configurações gerais" />}
                </NavBar>
                <NavBar link="/user" svg={<LuUserCircle2 />} title="Usuário" />
                <NavBar
                    onClick={() => handleToggle('resources')}
                    svg={<IoFileTrayFullOutline />}
                    title="Outros recursos"
                    arrow={visibility.resources ? <IoIosArrowUp /> : <IoIosArrowDown />}
                >
                    {visibility.resources && <SubMenu link="/transmitions" linkTwo="/integrations" title="Transmissões" titleTwo="Integrações" />}
                </NavBar>
                <NavBar link="/notifications" svg={<IoNotificationsOutline />} title="Notificações" />
            </nav>
            <HelpCenter />
        </HeaderContainer>
    );
}
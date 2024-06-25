import React from "react";
import { CallLogo, HelpContainer } from "./styles";
import { BiSupport } from "react-icons/bi";
import Button from "../../../common/button";

export default function HelpCenter(){
    return(
        <HelpContainer>
            <CallLogo>
                <BiSupport />
            </CallLogo>
            <h3>Central de ajuda</h3>
            <span>Tire suas dúvidas e fale com nosso suporte</span>
            <Button link="https://t.me/SharpBotSuporte" title="Suporte"/>
        </HelpContainer>
    );
}
import React from "react";
import { ConfigContainer, Configs, Container, Tags } from "./styles";
import Header from "../../../components/common/header";
import { GoGear } from "react-icons/go";
import Tag from "../../../components/specific/configsTags";

export default function MainConfigs(){
    return(
        <ConfigContainer>
            <Header />
            <Container>
                <Configs>
                    <div className="title">
                        <GoGear />
                        <h2>Configurações</h2>
                    </div>
                    <Tags>
                        <Tag title="Corretora:" description="Avalon" />
                        <Tag title="Lista de Sinais:" description="SharpBot Intelligence" />
                        <Tag title="Moeda:" description="Real BRL" />
                        <Tag title="Fuso horário:" description="Brasília" />
                        <Tag title="Idioma:" description="Português" />
                        <Tag title="Modalidade:" description="Day Trading" />
                    </Tags>
                </Configs>
            </Container>
        </ConfigContainer>
    );
}
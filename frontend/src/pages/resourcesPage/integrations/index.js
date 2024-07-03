import React from "react";
import { Container, Integration, IntegrationsContainer } from "./styles";
import Header from "../../../components/common/header";
import { BsRobot } from "react-icons/bs";

export default function Integrations(){
    return(
        <IntegrationsContainer>
            <Header />
            <Container>
                <Integration>
                    <div className="title">
                        <BsRobot />
                        <h2>SharpTrad Intelligence</h2>
                    </div>
                    <span>
                        O SharpTrad é uma inteligência artificial avançada especializada em sinais de day trading para opções binárias. Projetado para operar com alta performance analítica, o SharpTrad utiliza algoritmos sofisticados e análises de dados em tempo real para identificar oportunidades de trading com precisão e eficiência. Com sua capacidade de processar grandes volumes de informações e detectar padrões complexos, o SharpTrad oferece aos traders uma vantagem significativa no mercado, proporcionando sinais confiáveis e otimizados para maximizar os lucros.
                    </span>
                </Integration>
            </Container>
        </IntegrationsContainer>
    );
}
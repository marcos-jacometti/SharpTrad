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
                        <h2>SharpBot Intelligence</h2>
                    </div>
                    <span>
                        SharpBot é uma IA de alto desempenho especializada na análise de sinais de jogos de cassino. Com algoritmos avançados e uma capacidade analítica impressionante, SharpBot monitora, processa e interpreta dados em tempo real para identificar padrões e oportunidades estratégicas, ajudando jogadores e operadores a tomarem decisões informadas e otimizadas. Sua precisão e eficiência fazem do SharpBot um parceiro indispensável no mundo dos jogos de cassino.
                    </span>
                </Integration>
            </Container>
        </IntegrationsContainer>
    );
}
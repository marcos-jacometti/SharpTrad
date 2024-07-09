import React, { useState } from "react";
import { Container, PlansContainer } from "./styles";
import Header from "../../../components/common/header";
import PayContainer from "../../../components/specific/plansComponents/cards";
import Button from "../../../components/common/button";
import CheckoutPro from "../../../components/specific/plansComponents/checkout/pro";
import CheckoutExpert from "../../../components/specific/plansComponents/checkout/expert";

export default function Plans(){
    const [visible, setVisible] = useState(false);
    const [visibleExpert, setVisibleExpert] = useState(false);

    const handleBtnClick = () => {
        setVisible(true);
    }

    const handleBtnClickExpert = () => {
        setVisibleExpert(true);
    }

    return(
        <PlansContainer>
            <Header />
            <Container>
                <PayContainer title="FREE" 
                    items={["03 Sinais Diários", "SharpTrad Intelligence", "Suporte Exclusivo"]}
                />
                <PayContainer title="PRO" h4="12x de" h2="R$39,99" h3="à vista R$399,99" 
                    items={["05 Sinais Diários", "SharpTrad Intelligence", "Gerenciamento de Banca", "Estratégia Sharp", "Suporte Exclusivo"]}
                    button={<Button onClick={handleBtnClick} title="ASSINAR"/>}
                />
                <PayContainer title="EXPERT" h4="12x de" h2="R$49,99" h3="à vista R$499,99" 
                    items={["10 Sinais Diários", "SharpTrad Intelligence", "Gerenciamento de Banca", "Estratégia Sharp", "Suporte Exclusivo"]}
                    button={<Button onClick={handleBtnClickExpert} title="ASSINAR"/>}
                />
                {visible && <CheckoutPro visible={visible} setVisible={setVisible} />}
                {visibleExpert && <CheckoutExpert visible={visibleExpert} setVisible={setVisibleExpert} />}
            </Container>
        </PlansContainer>
    );
}
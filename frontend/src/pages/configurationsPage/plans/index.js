import React, { useState } from "react";
import { Container, PlansContainer } from "./styles";
import Header from "../../../components/common/header";
import PayContainer from "../../../components/specific/plansComponents/cards";
import Button from "../../../components/common/button";
import Checkout from "../../../components/specific/plansComponents/checkout";

export default function Plans(){
    const [visible, setVisible] = useState(false);

    const handleBtnClick = () => {
        setVisible(true);
    }

    return(
        <PlansContainer>
            <Header />
            <Container>
                <PayContainer title="FREE" 
                    items={["03 Sinais Diários", "SharBot Intelligence", "Suporte Exclusivo"]}
                />
                <PayContainer title="PRO" h4="12x de" h2="R$33,32" h3="à vista R$399,99" 
                    items={["05 Sinais Diários", "SharBot Intelligence", "Gerenciamento de Banca", "Estratégia Sharp", "Suporte Exclusivo"]}
                    button={<Button onClick={handleBtnClick} title="ASSINAR"/>}
                />
                <PayContainer title="EXPERT" h4="12x de" h2="R$41,66" h3="à vista R$499,99" 
                    items={["10 Sinais Diários", "SharBot Intelligence", "Gerenciamento de Banca", "Estratégia Sharp", "Suporte Exclusivo"]}
                    button={<Button onClick={handleBtnClick} title="ASSINAR"/>}
                />
                {visible && <Checkout visible={visible} setVisible={setVisible} />}
            </Container>
        </PlansContainer>
    );
}
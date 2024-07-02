import React from "react";
import { BetsContainer, Container, BetsSignals, GamesContent } from "./styles";
import Header from "../../components/common/header";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import FreePlan from "../../components/specific/betsComponents/usersPlans/free";
import ProPlan from "../../components/specific/betsComponents/usersPlans/pro";
import ExpertPlan from "../../components/specific/betsComponents/usersPlans/expert";

export default function Signals(){
    const userId = localStorage.getItem('userId');
    const userType = localStorage.getItem('userType');

    const renderComponent = () => {
        if (!userId) {
            return <FreePlan />;
        } else if (userType === 'Plano Pro') {
            return <ProPlan />;
        } else if (userType === 'Plano Expert') {
            return <ExpertPlan />;
        } else {
            return <FreePlan />;
        }
    };

    return (
        <BetsContainer>
            <Header />
            <GamesContent>
                <Container>
                    <div className="title">
                        <IoExtensionPuzzleOutline />
                        <h3>Sinais Automáticos</h3>
                    </div>
                    <BetsSignals>
                        {renderComponent()}
                    </BetsSignals>
                </Container>
            </GamesContent>
        </BetsContainer>
    );
}
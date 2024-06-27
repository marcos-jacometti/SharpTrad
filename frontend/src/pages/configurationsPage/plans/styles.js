import styled from "styled-components";
import { containerMediaStyles, plansContainerMediaStyles } from "./responsive";

export const PlansContainer = styled.div`
    display: flex;
    ${plansContainerMediaStyles};
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 3vw;
    align-items: center;
    width: 82vw;
    height: 100vh;
    margin-left: 18vw;
    ${containerMediaStyles};
`;


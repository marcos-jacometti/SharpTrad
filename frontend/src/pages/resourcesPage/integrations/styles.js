import styled from "styled-components";
import { containerMediaStyles, integrationMediaStyles, integrationsMediaStyles, spanMediaStyles, svgMediaStyles, titleMediaStyles } from "./responsive";

export const IntegrationsContainer = styled.div`
    display: flex;
    ${integrationsMediaStyles};
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82vw;
    height: 100vh;
    margin-left: 18vw;
    ${containerMediaStyles};
`;

export const Integration = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    height: 60vh;
    width: 30vw;
    gap: 3vh;
    ${integrationMediaStyles};

    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        gap: 1rem;
        display: flex;
        width: 20vw;
        height: 10vh;
        border-bottom: 0.1vh solid #e7e8eb;
        ${titleMediaStyles};

        svg {
            font-size: 1.5vw;
            ${svgMediaStyles};
        }
    }

    span {
        max-width: 20vw;
        line-height: 2.8vh;
        font-size: 0.8vw;
        ${spanMediaStyles};
    }
`;
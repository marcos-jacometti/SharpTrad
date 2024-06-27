import styled from "styled-components";
import { containerMediaStyles, liveMediaStyles, svgMediaStyles, transmitionsMediaStyles } from "./responsive";

export const TransmitionsContainer = styled.div`
    display: flex;
    ${transmitionsMediaStyles};
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

export const Live = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    width: 50vw;
    background-color: #fff;
    border-radius: 1vh;
    height: 35vh;
    ${liveMediaStyles};

    svg {
        font-size: 2vw;
        fill: #ff0000;
        ${svgMediaStyles};
    }
`;
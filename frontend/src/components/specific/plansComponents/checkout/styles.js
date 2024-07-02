import styled from "styled-components";
import { closeMediaStyles, h4MediaStyles, svgMediaStyles, upMediaStyles } from "./responsive";

export const Container = styled.div`
    ${props => props.$visible && `
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
    `}
`;

export const Up = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: #fff;
    height: 40vh;
    width: 20vw;
    border-radius: 2vh;
    position: relative;
    margin-left: 18vw;
    ${upMediaStyles};

    h4 {
        max-width: 16vw;
        text-align: center;
        ${h4MediaStyles};
    }
`;

export const Close = styled.div`
    position: absolute;
    right: 0.8vw;
    top: 1vh;
    ${closeMediaStyles};

    svg {
        font-size: 2vw;
        ${svgMediaStyles};

        :hover {
            fill:#3e90f8;
        }
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`;

export const Info = styled.div`
    height: auto;
`;
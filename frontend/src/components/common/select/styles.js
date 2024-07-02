import styled from "styled-components";
import { containerMediaStyles, contentMediaStyles, optionsMediaStyles, svgMediaStyles } from "./responsive";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 15vh;
    ${contentMediaStyles};
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5vw;
    border-radius: 1vh;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4), 0 12px 30px 0 rgba(0, 0, 0, 0.3);
    padding: 1rem;
    height: 4vh;

    svg{
        font-size: 1vw;
        ${svgMediaStyles};
    }

    select {
        border: none;
        background-color: transparent;
        width: 10.2vw;
        font-size: 0.8vw;
        outline: none;
        ${containerMediaStyles};
    }

    option {
        font-size: 0.8vw;
        ${optionsMediaStyles};
    }
`;
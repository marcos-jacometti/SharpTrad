import styled from "styled-components";
import { containerMediaStyles, spanMediaStyles } from "./responsive";

export const Container = styled.div`
    display: flex;
    gap: 0.5vw;
    align-items: center;
    height: 4vh;
    ${containerMediaStyles};

    span {
        font-size: 0.8vw;
        ${spanMediaStyles};
    }
`;
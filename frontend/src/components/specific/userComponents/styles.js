import styled from "styled-components";

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
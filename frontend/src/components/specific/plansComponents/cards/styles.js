import styled from "styled-components";
import { containerMediaStyles, descriptionMediaStyles, listMediaStyles, ulMediaStyles } from "./responsive";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
    height: 60vh;
    width: 20vw;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 2vh;
    ${containerMediaStyles};

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4), 0 12px 30px 0 rgba(0, 0, 0, 0.3);
    }
`;

export const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border-bottom: 0.4vh solid #e7e8eb;
    height: 18vh;
    width: 15vw;
    ${descriptionMediaStyles};

    div {
        text-align: center;

        h2 {
            color: #3e90f8;
        }
    }
`;

export const List = styled.div`
    display: flex;
    align-items: center;
    width: 15vw;
    height: 30vh;
    ${listMediaStyles};

    ul {
        font-size: 0.9vw;
        line-height: 5vh;
        height: 30vh;
        ${ulMediaStyles};
    }
`;
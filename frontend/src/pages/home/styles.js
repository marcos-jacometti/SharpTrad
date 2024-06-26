import styled from "styled-components";
import img from "../../assets/images/announce.png"
import { annoucementMediaStyles, boardMediaStyles, boardsMediaStyles, containerMediaStyles, contentMediaStyles } from "./responsive";

export const Container = styled.div`
    display: flex;
    ${containerMediaStyles}
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82vw;
    height: auto;
    padding: 10vh;
    margin-left: 18vw;
    ${contentMediaStyles}
`;

export const Boards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1vw;
    max-width: 70vw;
    height: auto;
    ${boardsMediaStyles};
`;

export const Announcement = styled.div`
    width: 70vw;
    height: 10vh;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.4), 0 2px 8px 0 rgba(0, 0, 0, 0.3);
    border-radius: 2vh;
    background: url(${img}) center / cover;
    ${annoucementMediaStyles};
`;

export const Board = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: #fff;
    border-radius: 1vh;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.4), 0 2px 8px 0 rgba(0, 0, 0, 0.3);
    height: ${props => props.$height};
    width: ${props => props.$width};
    background: url(${props => props.$background}) center / cover;
    ${boardMediaStyles};

    h5 {
        max-width: 14vw;
        text-align: center;
    }
`;
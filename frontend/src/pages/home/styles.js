import styled from "styled-components";
import img from "../../assets/images/announce.png"

export const Container = styled.div`
    display: flex;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82vw;
    height: auto;
    padding: 8rem;
    margin-left: 18vw;
`;

export const Boards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2vw;
    max-width: 70vw;
    height: auto;
`;

export const Announcement = styled.div`
    width: 70vw;
    height: 10vh;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.4), 0 2px 8px 0 rgba(0, 0, 0, 0.3);
    border-radius: 2vh;
    background: url(${img}) center / cover;
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

    h3 {
        max-width: 10vw;
        text-align: center;
    }
`;
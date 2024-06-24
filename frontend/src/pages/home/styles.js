import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 82vw;
    height: 100vh;
    padding: 2rem;
    margin-left: 18vw;
`;

export const Board = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 1vh;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4), 0 12px 30px 0 rgba(0, 0, 0, 0.3);
    height: ${props => props.$height};
    width: ${props => props.$width};
`;
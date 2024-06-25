import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 10vh;
    width: 65vw;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1vh;
    padding: 1vh;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4), 0 12px 30px 0 rgba(0, 0, 0, 0.3);
    }
`;

export const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1vh;
    height: 8vh;
    width: 4vw;
    
    svg {
        stroke-width: 0.1vh;
        color: green;
        font-size: 2.2vw;
    }
`;

export const Details = styled.div`
    display: flex;
    justify-content: space-around;
    width: 58vw;

    div {
        display: flex;
        align-items: center;
        gap: 0.4vw;
        
        svg {
            font-size: 1vw;
        }
    }
`;
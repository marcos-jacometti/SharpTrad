import styled from "styled-components";

export const HelpContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    background-color: #e6f0fe;
    height: 25vh;
    width: 16vw;
    border-radius: 1vh;
    color: #3e90f8;
    text-align: center;

    span {
        font-size: 0.8vw;
    }
`;

export const CallLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3e90f8;
    border-radius: 1vh;
    height: 6vh;
    width: 3vw;
        
    svg {
        font-size: 1.8vw;
        fill: #fff;
    }
`;
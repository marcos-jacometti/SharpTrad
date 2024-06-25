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

export const Up = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: #fff;
    height: 55vh;
    width: 20vw;
    border-radius: 2vh;
    position: relative;
    margin-left: 18vw;
`;

export const Close = styled.div`
    position: absolute;
    right: 0.8vw;
    top: 1vh;

    svg {
        font-size: 2vw;
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    height: 40vh;
    
    button {
        background-color: #3e90f8;

        :hover {
            color: #000;
        }
    }
`;
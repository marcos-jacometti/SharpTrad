import styled from "styled-components";

export const IntegrationsContainer = styled.div`
    display: flex;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82vw;
    height: 100vh;
`;

export const Integration = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    height: 60vh;
    width: 30vw;
    gap: 3vh;

    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        gap: 1rem;
        display: flex;
        width: 20vw;
        height: 10vh;
        border-bottom: 0.1vh solid #e7e8eb;

        svg {
            font-size: 1.5vw;
        }
    }

    span {
        max-width: 18vw;
        text-align: center;
        line-height: 2.8vh;
        font-size: 0.8vw;
    }
`;
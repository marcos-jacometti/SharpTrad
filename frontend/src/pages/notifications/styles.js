import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`;

export const NotifyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82vw;
    height: 100vh;
`;

export const Notify = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 70vw;
    background-color: #fff;
    border-radius: 1vh;
    height: 90vh;

    .title {
        display: flex;
        align-items: center;
        padding: 1rem;
        gap: 1rem;
        display: flex;
        width: 68vw;
        height: 10vh;
        border-bottom: 0.1vh solid #e7e8eb;

        svg {
            font-size: 1.5vw;
        }
    }
`;
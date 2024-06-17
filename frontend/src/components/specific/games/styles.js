import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 15vh;
    width: 20vw;
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Image = styled.div`
    height: 8vh;
    width: 4vw;
    background: url(${(props) => props.$background}) center / cover;
    border-radius: 1vh;
`;
import styled from "styled-components";

export const Container = styled.div`
    height: 15vh;
    width: 20vw;

    button {
        background-color: transparent;
        border: none;
        height: 15vh;
        width: 20vw;
        cursor: pointer;
        border-radius: 1vh;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        
        position: relative;
    }

    button:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 30px 0 rgba(0, 0, 0, 0.19);
    }
    
    .link {
        display: flex;
        gap: 1rem;
        align-items: center;
        padding: 1rem;
        text-decoration: none;
        color: inherit;
        font-size: 0.75vw;
    }
`;

export const Image = styled.div`
    height: 8vh;
    width: 4vw;
    background: url(${(props) => props.$background}) center / cover;
    border-radius: 1vh;
`;

export const Count = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3vh;
    position: absolute;
    right: 2rem;
`;
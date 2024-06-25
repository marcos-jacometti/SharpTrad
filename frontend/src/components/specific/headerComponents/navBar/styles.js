import styled from "styled-components";

export const NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2vh;
    width: 16vw;
    margin-bottom: 0.5rem;
    border-radius: 1vh;
    background-color: ${props => props.$isActive ? '#eff6ff' : 'transparent'};

    button {
        border: none;
        height: 3.2vh;
        width: 15.5vw;
        font-size: 0.9vw;
        background-color: transparent;
        color: ${props => props.$isActive ? '#3e90f8' : 'inherit'};

        svg {
            font-size: 1.18vw;
        }
    }

    .link {
        display: flex;
        align-items: center;
        color: inherit;
        text-decoration: none;
        gap: 1vh;
        width: 100%;
    }
`;
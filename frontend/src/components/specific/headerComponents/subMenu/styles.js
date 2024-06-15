import styled from "styled-components";

export const SubMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    font-size: 1.18rem;
    color: ${props => props.isActive ? '#3e90f8' : 'inherit'};

    .link {
        text-decoration: none;
        height: 5vh;
        padding: 1rem;
    }
`;
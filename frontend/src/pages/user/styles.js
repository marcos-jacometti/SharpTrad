import styled from "styled-components";

export const UserContainer = styled.div`
    display: flex;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82vw;
    height: 100vh;
    margin-left: 18vw;
`;

export const UserLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 44vh;
    width: 20vw;
    background-color: #fff;
    border-radius: 1vh;

    h3 {
        max-width: 12vw;
        text-align: center;
    }

    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 30vh;
    }
`;

export const Btn = styled.div`
    button {
        border: none;
        background-color: transparent;
        cursor: pointer;

        :hover {
            color: #3e90f8;
        }
    }
`;
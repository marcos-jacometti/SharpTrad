import styled from "styled-components";
import { containerMediaStyles, h3MediaStyles, loginMediaStyles, userContainerMediaStyles, userLoginMediaStyles } from "./responsive";

export const UserContainer = styled.div`
    display: flex;
    ${userContainerMediaStyles};
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82vw;
    height: 100vh;
    margin-left: 18vw;
    ${containerMediaStyles};
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
    ${userLoginMediaStyles};

    h3 {
        max-width: 12vw;
        text-align: center;
        ${h3MediaStyles};
    }

    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 30vh;
        ${loginMediaStyles};
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
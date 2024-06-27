import { css } from "styled-components";
import { device } from "../../assets/styles/mediaQueries";

export const userContainerMediaStyles = css`
    @media ${device.mobile}{
        flex-direction: column;
    }
`;

export const containerMediaStyles = css`
    @media ${device.mobile}{
        margin-left: 0;
        width: 100vw;
        height: 90.5vh;
    }
`;

export const userLoginMediaStyles = css`
    @media ${device.mobile}{
        width: 80vw;
        height: 60vh;
    }
`;

export const h3MediaStyles = css`
    @media ${device.mobile}{
        min-width: 55vw;
        font-size: 4vw;
    }
`;

export const loginMediaStyles = css`
    @media ${device.mobile}{
        height: 42vh;
    }
`;
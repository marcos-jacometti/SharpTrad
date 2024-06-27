import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const transmitionsMediaStyles = css`
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

export const liveMediaStyles = css`
    @media ${device.mobile}{
        width: 90vw;
        font-size: 3.5vw;
        height: 15vh;
        gap: 3vw;
    }
`;

export const svgMediaStyles = css`
    @media ${device.mobile}{
        font-size: 6vw;
    }
`;
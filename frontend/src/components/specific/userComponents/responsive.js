import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const upMediaStyles = css`
    @media ${device.mobile}{
        margin-left: 0;
        width: 80vw;
        height: 75vh;
    }
`;

export const closeMediaStyles = css`
    @media ${device.mobile}{
        top: 2vh;
        right: 3vw;
    }
`;

export const svgMediaStyles = css`
    @media ${device.mobile}{
        font-size: 8.5vw;
    }
`;

export const infoMediaStyles = css`
    @media ${device.mobile}{
        height: 50vh;
    }
`;
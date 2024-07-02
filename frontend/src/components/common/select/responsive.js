import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const contentMediaStyles = css`
    @media ${device.mobile}{
        height: 20vh;
    }
`;

export const containerMediaStyles = css`
    @media ${device.mobile}{
        width: 50vw;
        font-size: 4vw;
    }
`;

export const svgMediaStyles = css`
    @media ${device.mobile}{
        font-size: 4vw;
    }
`;

export const optionsMediaStyles = css`
    @media ${device.mobile}{
        font-size: 3vw;
    }
`;
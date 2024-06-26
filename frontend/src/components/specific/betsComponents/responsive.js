import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const containerMediaStyles = css`
    @media ${device.mobile}{
        width: 85vw;
        min-height: 25vh;
        flex-direction: column;
    }
`;

export const backgroundMediaStyles = css`
    @media ${device.mobile}{
        width: 10vw;
    }
`;

export const svgMediaStyles = css`
    @media ${device.mobile}{
        font-size: 6vw;
        stroke-width: 0.2vh;
    }
`;

export const detailsMediaStyles = css`
    @media ${device.mobile}{
        width: 80vw;
        height: 100%;
        justify-content: space-between;
        flex-direction: column;
    }
`;

export const divMediaStyles = css`
    @media ${device.mobile}{
        gap: 1.5vh;
    }
`;

export const svgDetailsMediaStyles = css`
    @media ${device.mobile}{
        font-size: 4vw;
    }
`;
import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const configContainerMediaStyles = css`
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

export const configsMediaStyles = css`
    @media ${device.mobile}{
        width: 80vw;
        height: 60vh;
    }
`;

export const titleMediaStyles = css`
    @media ${device.mobile}{
        width: 70vw;
    }
`;

export const svgMediaStyles = css`
    @media ${device.mobile}{
        font-size: 8vw;
    }
`;

export const tagsMediaStyles = css`
    @media ${device.mobile}{
        width: 70vw;
    }
`;
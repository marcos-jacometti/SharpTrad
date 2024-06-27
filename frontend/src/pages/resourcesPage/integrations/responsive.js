import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const integrationsMediaStyles = css`
    @media ${device.mobile}{
        flex-direction: column;
    }
`;

export const containerMediaStyles = css`
    @media ${device.mobile}{
        margin-left: 0;
        width: 100vw;
    }
`;

export const integrationMediaStyles = css`
    @media ${device.mobile}{
        width: 80vw;
    }
`;

export const titleMediaStyles = css`
    @media ${device.mobile}{
        width: 70vw;
        font-size: 3vw;
    }
`;

export const svgMediaStyles = css`
    @media ${device.mobile}{
        font-size: 6vw;
    }
`;

export const spanMediaStyles = css`
    @media ${device.mobile}{
        font-size: 3vw;
        min-width: 65vw;
    }
`;
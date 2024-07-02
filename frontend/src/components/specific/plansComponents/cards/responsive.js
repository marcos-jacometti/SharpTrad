import { css } from "styled-components";
import { device } from "../../../../assets/styles/mediaQueries";

export const containerMediaStyles = css`
    @media ${device.mobile}{
        width: 80vw;
        height: 60vh;
    }
`;

export const descriptionMediaStyles = css`
    @media ${device.mobile}{
        width: 60vw;
    }
`;

export const listMediaStyles = css`
    @media ${device.mobile}{
        width: 60vw;
        height: 30vh;
    }
`;

export const ulMediaStyles = css`
    @media ${device.mobile}{
        font-size: 4vw;
    }
`;
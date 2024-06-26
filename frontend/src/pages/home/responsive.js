import { css } from "styled-components";
import { device } from "../../assets/styles/mediaQueries";

export const containerMediaStyles = css`
    @media ${device.mobile} {
        flex-direction: column;
    }
`;

export const contentMediaStyles = css`
    @media ${device.mobile} {
        width: 100vw;
        margin-left: 0;
        padding: 8vh;
    }
`;

export const boardsMediaStyles = css`
    @media ${device.mobile}{
        min-width: 100vw;
        gap: 3vw;
        flex-direction: column;
        align-items: center;
    }
`;

export const annoucementMediaStyles = css`
    @media ${device.mobile}{
        width: 90vw;
    }
`;

export const boardMediaStyles = css`
    @media ${device.mobile}{
        height: 48vh;
        width: 90vw;

        h5 {
            min-width: 60vw;
        }
    }
`;
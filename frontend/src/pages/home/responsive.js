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
    }
`;
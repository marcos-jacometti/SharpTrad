import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const containerMediaStyles = css`
    @media ${device.mobile}{
        gap: 2vh;
    }
`;

export const spanMediaStyles = css`
    @media ${device.mobile}{
        font-size: 3.3vw;
    }
`;
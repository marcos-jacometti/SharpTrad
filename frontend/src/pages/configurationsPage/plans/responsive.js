import { css } from "styled-components"
import { device } from "../../../assets/styles/mediaQueries"

export const plansContainerMediaStyles = css`
    @media ${device.mobile}{
        flex-direction: column;
    }
`;

export const containerMediaStyles = css`
    @media ${device.mobile}{
        width: 100vw;
        margin-left: 0;
        flex-direction: column;
        height: auto;
        padding: 4rem;
        gap: 5vw;
    }
`;